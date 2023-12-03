import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { HeaderNavButtonsComponent } from './components/header-nav-buttons/header-nav-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { StatsBlockComponent } from './components/stats-block/stats-block.component';
import { YoutubeBlockComponent } from './components/platform-blocks/youtube-block/youtube-block.component';
import { InstagramBlockComponent } from './components/platform-blocks/instagram-block/instagram-block.component';
import { SpotifyBlockComponent } from './components/platform-blocks/spotify-block/spotify-block.component';
import { NewgroundsBlockComponent } from './components/platform-blocks/newgrounds-block/newgrounds-block.component';
import { SoundcloudBlockComponent } from './components/platform-blocks/soundcloud-block/soundcloud-block.component';
import { TwitterBlockComponent } from './components/platform-blocks/twitter-block/twitter-block.component';
import { TwitchBlockComponent } from './components/platform-blocks/twitch-block/twitch-block.component';
import { TiktokBlockComponent } from './components/platform-blocks/tiktok-block/tiktok-block.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { GenericFilterPipe } from './pipes/generic-filter.pipe';
import { NumberTruncatePipe } from './pipes/number-truncate.pipe';

@NgModule({
    declarations: [AppComponent, HomeComponent, AboutComponent, UserProfileComponent, HeaderNavButtonsComponent, StatsBlockComponent, YoutubeBlockComponent, InstagramBlockComponent, SpotifyBlockComponent, NewgroundsBlockComponent, SoundcloudBlockComponent, TwitterBlockComponent, TwitchBlockComponent, TiktokBlockComponent, SearchInputComponent, GenericFilterPipe, NumberTruncatePipe],
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
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
