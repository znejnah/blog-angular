import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { form } from '@angular/forms/signals';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it } from 'vitest';
import { FormInputComponent } from './form-input.component';

describe('FormInputComponent', () => {
  // Test's global variables
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  // allow to start from a fresh new component for each iteration
  beforeEach(async () => {
    // test's module setup (same as in app.config.ts)
    await TestBed.configureTestingModule({
      imports: [FormInputComponent],
    }).compileComponents();

    // Angular creates the component
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;

    // 1. SOLUTION NG0203 : Create the form in injection context
    let dummyForm: any;
    TestBed.runInInjectionContext(() => {
      const dummyModel = signal({ myTestField: '' });
      dummyForm = form(dummyModel, () => {});
    });

    // 2. REQUIRED FIELDS to be displayed
    fixture.componentRef.setInput('label', 'My Field');
    fixture.componentRef.setInput('field', dummyForm.myTestField());
    fixture.componentRef.setInput('texts', { common: { required: 'Requis' } } as any);
    fixture.detectChanges();
  });

  // First test : Sanity Check
  it('should create a component', () => {
    // expect component to exist
    expect(component).toBeTruthy();
  });

  // Second test
  it('should display a red asterisk when isRequired true', () => {
    // ARRANGE : simulate a dev using the component
    fixture.componentRef.setInput('isRequired', true);
    // ACT : update the html - same as F5
    fixture.detectChanges();

    // check html for the element with css class: 'text-red-500'
    const asteriskElement = fixture.debugElement.query(By.css('.text-red-500'));

    // ASSERT : expect Angular to find the element
    expect(asteriskElement).toBeTruthy();
    // expect the element text to be "*" (Attention à la parenthèse après trim !)
    expect(asteriskElement.nativeElement.textContent.trim()).toBe('*');
  });
});
