import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangSwitcherComponent } from '../../features/i18n/components/lang-switcher/lang-switcher.component';

@Component({
  imports: [RouterOutlet, LangSwitcherComponent],
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {}
