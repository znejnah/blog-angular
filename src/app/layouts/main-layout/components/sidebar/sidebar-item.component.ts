import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../../../shared/ui/components/icon/icon.component';
import { IconName } from '../../../../shared/ui/components/icon/icons.constant';

@Component({
  imports: [RouterLink, RouterLinkActive, IconComponent],
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
  readonly to = input.required<string | any[]>();
  readonly icon = input.required<IconName>();
  readonly label = input.required<string>();

  exact = input<boolean>(false);
}
