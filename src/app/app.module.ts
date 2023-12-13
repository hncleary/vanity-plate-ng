import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { HeaderNavButtonsComponent } from './components/header-nav-buttons/header-nav-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { StatsBlockComponent } from './components/stats-block/stats-block.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { GenericFilterPipe } from './pipes/generic-filter.pipe';
import { NumberTruncatePipe } from './pipes/number-truncate.pipe';
import { DisplayPlateComponent } from './components/display-plate/display-plate.component';
import { UserPlateComponent } from './components/user-plate/user-plate.component';
import { AccountBlockComponent } from './components/account-block/account-block.component';
import { TruncationTipDirective } from './directives/truncation-tip.directive';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { UserPlateBlockComponent } from './components/user-plate-block/user-plate-block.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        UserProfileComponent,
        HeaderNavButtonsComponent,
        StatsBlockComponent,
        SearchInputComponent,
        GenericFilterPipe,
        NumberTruncatePipe,
        DisplayPlateComponent,
        UserPlateComponent,
        AccountBlockComponent,
        TruncationTipDirective,
        UserPlateBlockComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        HttpClientModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatTooltipModule,
    ],
    providers: [MatTooltip, MatIconRegistry],
    bootstrap: [AppComponent],
})
export class AppModule {}
