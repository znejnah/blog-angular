import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  readonly title = input<string>();
  readonly error = input<string | null>(null);
}
