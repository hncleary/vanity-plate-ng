import { Component } from '@angular/core';
import { PAGE_ROUTES } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header-nav-buttons',
  templateUrl: './header-nav-buttons.component.html',
  styleUrls: ['./header-nav-buttons.component.scss']
})
export class HeaderNavButtonsComponent {
  public readonly links: LinkDef[] = [
    { icon: 'home', route: PAGE_ROUTES.HOME},
    { icon: 'info', route: PAGE_ROUTES.ABOUT},
  ];
}
export class LinkDef { 
  public icon = 'home';
  public route: string = PAGE_ROUTES.HOME;
}
