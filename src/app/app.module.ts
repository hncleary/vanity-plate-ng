import { DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { NgxMatSearchbarModule } from 'ngx-mat-searchbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountBlockComponent } from './components/account-block/account-block.component';
import { DisplayPlateComponent } from './components/display-plate/display-plate.component';
import { HeaderNavButtonsComponent } from './components/header-nav-buttons/header-nav-buttons.component';
import { StatsBlockComponent } from './components/stats-block/stats-block.component';
import { UserPlateBlockComponent } from './components/user-plate-block/user-plate-block.component';
import { UserPlateComponent } from './components/user-plate/user-plate.component';
import { TruncationTipDirective } from './directives/truncation-tip.directive';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoricalChartComponent } from './pages/user-profile/historical-chart/historical-chart.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { WhatsNewComponent } from './pages/whats-new/whats-new.component';
import { GenericFilterPipe } from './pipes/generic-filter.pipe';
import { NumberTruncatePipe } from './pipes/number-truncate.pipe';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        WhatsNewComponent,
        UserProfileComponent,
        HeaderNavButtonsComponent,
        StatsBlockComponent,
        GenericFilterPipe,
        NumberTruncatePipe,
        DisplayPlateComponent,
        UserPlateComponent,
        AccountBlockComponent,
        TruncationTipDirective,
        UserPlateBlockComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatTooltipModule,
        NgxMatSearchbarModule,
        HistoricalChartComponent,
        MatRippleModule,
        MatTabsModule,
    ],
    providers: [
        DatePipe,
        MatTooltip,
        MatIconRegistry,
        provideHttpClient(withInterceptorsFromDi()),
        provideCharts(withDefaultRegisterables()),
    ],
})
export class AppModule {}
