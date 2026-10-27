import { Service, signal } from '@angular/core';

@Service()
export class LayoutStateService {
  readonly pageTitle = signal<string>('');
  readonly pageSubtitle = signal<string>('');

  setTitle(title: string, subTitle = ''): void {
    this.pageTitle.set(title);
    this.pageSubtitle.set(subTitle);
  }
}
