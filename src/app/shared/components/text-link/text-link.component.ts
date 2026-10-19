import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-text-link',
  templateUrl: './text-link.component.html',
})
export class TextLinkComponent {
  to = input.required<string | any[]>();
  replace = input<boolean>(true);
}
