import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  title = input<string>();
  error = input<string | null>(null);
}
