import { Component } from '@angular/core';
import { PAGE_ROUTES } from 'src/app/app-routing.module';

@Component({
    selector: 'app-header-nav-buttons',
    templateUrl: './header-nav-buttons.component.html',
    styleUrls: ['./header-nav-buttons.component.scss'],
})
export class HeaderNavButtonsComponent {
    public readonly links: LinkDef[] = [
        { icon: 'home', route: PAGE_ROUTES.HOME, displayName: 'Home' },
        { icon: 'newspaper', route: PAGE_ROUTES.WHATS_NEW, displayName: "What's New" },
        { icon: 'info', route: PAGE_ROUTES.ABOUT, displayName: 'About' },
    ];
}
export class LinkDef {
    public icon = 'home';
    public displayName = 'Home';
    public route: string = PAGE_ROUTES.HOME;
}
