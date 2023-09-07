import { Component } from '@angular/core';
import { PAGE_ROUTES } from 'src/app/app-routing.module';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  public readonly links: LinkDef[] = [
    { icon: 'home', route: PAGE_ROUTES.HOME},
    { icon: 'info', route: PAGE_ROUTES.ABOUT},
  ];
}

export class LinkDef { 
  public icon = 'home';
  public route: string = PAGE_ROUTES.HOME;
}