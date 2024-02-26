import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { VanityDbService, VanityPlateProfileStats, VanityPlateSum } from 'src/app/service/vanity-db.service';
import { filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
    public loading = true;
    public username = '';
    public userStats: VanityPlateProfileStats = new VanityPlateProfileStats();
    public userSum: VanityPlateSum = new VanityPlateSum();
    public timeRetrieved = 0;

    public youtubeLogo = 'assets/youtube.png';
    public instagramLogo = 'assets/instagram.png';
    public threadsLogo = 'assets/threads.png';
    public spotifyLogo = 'assets/spotify.png';
    public newgroundsLogo = 'assets/newgrounds.png';
    public soundcloudLogo = 'assets/soundcloud.png';
    public twitterLogo = 'assets/twitter.png';
    public twitchLogo = 'assets/twitch.png';
    public tiktokLogo = 'assets/tiktok.png';

    constructor(
        private _router: Router,
        private _dbSvc: VanityDbService,
    ) {
        this._router.events
            .pipe(
                filter((e) => e instanceof NavigationEnd),
                untilDestroyed(this),
            )
            .subscribe((event) => {
                const e = event as NavigationEnd;
                const url = e.url;
                const username = url.split('/u/').join('');
                this.username = username;
                void this.getStats(username);
            });
    }

    public async getStats(username: string) {
        /** Retrieve user stats */
        this.userStats = await this._dbSvc.getStatsForUser(username);
        /** Summate total follower count */
        this.userSum = this._dbSvc.getProfileStatsSummation(username, this.userStats);
        this.getTimeRetrieved();
        this.loading = false;
    }

    public getTimeRetrieved() { 
        if(this.userStats.youtubeStats.length) { 
          this.timeRetrieved = this.userStats.youtubeStats[0].timeRetrieved;
        }
      }
}
