import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
    ProfileStatsBase,
    VanityDbService,
    VanityPlateProfileStats,
    VanityPlateSum,
} from 'src/app/service/vanity-db.service';
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
    public concatStatsArray: ProfileStatsBase[] = [];
    public userSum: VanityPlateSum = new VanityPlateSum();
    public timeRetrieved = 0;

    public filterValue = '';

    public youtubeLogo = 'assets/youtube.png';
    public instagramLogo = 'assets/instagram.png';
    public threadsLogo = 'assets/threads.png';
    public spotifyLogo = 'assets/spotify.png';
    public newgroundsLogo = 'assets/newgrounds.png';
    public soundcloudLogo = 'assets/soundcloud.png';
    public twitterLogo = 'assets/twitter.png';
    public twitchLogo = 'assets/twitch.png';
    public tiktokLogo = 'assets/tiktok.png';
    public facebookLogo = 'assets/facebook.png';

    public currentSort: 'none' | 'alpha-account' | 'alpha-platform' | 'popular-account' | 'popular-platform' =
        'popular-platform';

    constructor(private _router: Router, private _dbSvc: VanityDbService) {
        this._router.events
            .pipe(
                filter((e) => e instanceof NavigationEnd),
                untilDestroyed(this)
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
        // Retrieve user stats
        this.userStats = await this._dbSvc.getStatsForUser(username);
        this.concatStatsArray = VanityPlateProfileStats.getConcatStatsArray(this.userStats);
        // Sum total follower count
        this.userSum = this._dbSvc.getProfileStatsSummation(username, this.userStats);
        // Get the most recent time retrieved based on the current set of profile stats objects
        this.getTimeRetrieved();
        // Update the current sort of profiles on initial load
        this.updateSort(this.currentSort);
        this.loading = false;
    }

    /** Get the most recent time retrieved value from the list of profile stats objects */
    public getTimeRetrieved() {
        if (this.concatStatsArray.length > 0) {
            this.timeRetrieved = this.concatStatsArray.sort((a, b) =>
                a.timeRetrieved < b.timeRetrieved ? -1 : 1
            )[0].timeRetrieved;
        }
    }

    public updateSort(newSort: 'none' | 'alpha-account' | 'alpha-platform' | 'popular-account' | 'popular-platform') {
        this.currentSort = newSort;
        this.sortAccountsArray();
    }

    private sortAccountsArray() {
        if (this.currentSort === 'alpha-account') {
            this.concatStatsArray = this.concatStatsArray.sort((a, b) => {
                if (!a.displayName) {
                    return 1;
                } else if (!b.displayName) {
                    return -1;
                } else {
                    return a.displayName < b.displayName ? -1 : 1;
                }
            });
        }
        if (this.currentSort === 'alpha-platform') {
            this.concatStatsArray = this.concatStatsArray.sort((a, b) => (a.platformName < b.platformName ? -1 : 1));
        }
        if (this.currentSort === 'popular-account') {
            this.concatStatsArray = this.concatStatsArray.sort((a, b) => (a.followerCount > b.followerCount ? -1 : 1));
        }
        if (this.currentSort === 'popular-platform') {
            const platformRankings = this.getPlatformFollowTotals();
            this.concatStatsArray = this.concatStatsArray.sort((a, b) => {
                const aRank: number | undefined = platformRankings.get(a.platformName);
                const bRank: number | undefined = platformRankings.get(b.platformName);
                if (aRank && bRank) {
                    if (aRank > bRank) {
                        return -1;
                    } else if (bRank > aRank) {
                        return 1;
                    } else {
                        return a.followerCount > b.followerCount ? -1 : 1;
                    }
                }
                return -1;
            });
        }
    }

    private getPlatformFollowTotals(): Map<string, number> {
        const totals: Map<string, number> = new Map<string, number>();
        for (const account of this.concatStatsArray) {
            const value: number | undefined = totals.get(account.platformName);
            totals.set(account.platformName, value ? value + account.followerCount : account.followerCount);
        }
        return totals;
    }
}
