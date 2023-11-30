import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export enum PAGE_ROUTES {
    HOME = 'home',
    ABOUT = 'about',
    USER = 'u',
}

const routes: Routes = [
    { path: PAGE_ROUTES.HOME, component: HomeComponent },
    { path: PAGE_ROUTES.ABOUT, component: AboutComponent },
    { path: PAGE_ROUTES.USER + '/:userId', component: UserProfileComponent },
    { path: '', redirectTo: PAGE_ROUTES.HOME, pathMatch: 'full' },
    { path: '**', redirectTo: PAGE_ROUTES.HOME },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
