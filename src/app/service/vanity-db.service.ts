import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { firstValueFrom } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class VanityDbService {
    private readonly statsFolderUrl: string = 'https://raw.githubusercontent.com/hncleary/vanity-plate-db/main/stats-v2/';
    private readonly statsJsonSuffix: string = '-stats.json';

    constructor(private _apiSvc: ApiService) {}

    /** Retrieve the complete stats object for a user */
    public async getStatsForUser(username: string): Promise<VanityPlateProfileStats> {
        const json = await firstValueFrom(
            this._apiSvc.getUrl(`${this.statsFolderUrl}${username}${this.statsJsonSuffix}`),
        );
        return json as VanityPlateProfileStats;
    }
    /** Retrieve the index of users available within the database */
    public async getUserIndexList(): Promise<VanityPlateSumCollection> {
        const json = await firstValueFrom(this._apiSvc.getUrl(`${this.statsFolderUrl}/db_summary.json`));
        return json as VanityPlateSumCollection;
    }

    public getProfileStatsSummation(username: string, stats: VanityPlateProfileStats): VanityPlateSum {
        const sum = new VanityPlateSum();
        sum.username = username;

        let statKey: keyof VanityPlateProfileStats;
        for(statKey in stats) { 
            const accounts = stats[statKey];
            if(typeof accounts !== 'string' && typeof accounts !== 'function') { 
                /** Loop over each account listed within the platform */
                for (const account of accounts) {
                    if (account?.followerCount) {
                        sum.totalFollowers += account.followerCount;
                    }
                }
            }
        }
        
        return sum;
    }
}

export class VanityPlateSum {
    public username = '';
    public displayName = '';
    public totalFollowers = 0;
}

export class VanityPlateSumCollection {
    /** List of vanity plate profiles summation indexes */
    public sums: VanityPlateSum[] = [];
    /** Timestamp for when these items were recorded */
    public timeRetrieved = 0;
}

/** Base class with stats values shared between account platforms */
export class ProfileStatsBase {
    /** Name of the platform the account is associated with */
    public platformName = '';
    /** Unix timestamp at which the referenced profile's stats were retrieved */
    public timeRetrieved = -1;
    /** The direct link to the account page */
    public link = '';
    /** The non-unique display name associated with the account */
    public displayName = '';
    /** Unique username / handle used to distinguish the account */
    public username = '';
    /** Number of followers that the account has */
    public followerCount = -1;
    /** Name for which to refer to followers as (ex. Fans, Subscribers, Listeners) */
    public followerLabel = 'Followers';
    /** Number of accounts on the platform that this account is following */
    public followingCount = -1;
    /** The current profile picture used by the account in base64 */
    public iconBase64 = '';
    /** The url at which the user's profile picture image file was found */
    public iconUrl = '';
    /** Output main details of the account to console */
    public print() {
        console.log(`${this.platformName} ${this.displayName} Details:`);
        console.log(`Username (@): ${this.username}`);
        console.log(`${this.followerLabel} Count: ${this.followerCount}`);
        if (this.followingCount > 0) {
            console.log(`Following Count: ${this.followingCount}`);
        }
    }
}

/** Stats associated with instagram accounts */
export class InstagramStats extends ProfileStatsBase {
    /** Total number of instagram posts that this account has made */
    public totalPosts = -1;
    constructor() {
        super();
        this.platformName = 'Instagram';
    }
    public override print() {
        super.print();
        console.log(`Total Posts: ${this.totalPosts}`);
    }
    public isValid(): boolean {
        let isValid = true;
        if (!this.iconBase64) {
            console.log(`No instagram icon set in profile (@${this.username})`);
            isValid = false;
        }
        if (this.totalPosts < 0) {
            console.log(`No value set for instagram total posts (@${this.username})`);
            isValid = false;
        }
        if (this.followerCount < 0) {
            console.log(`No value set for follower count (@${this.username})`);
            isValid = false;
        }
        if (this.followingCount < 0) {
            console.log(`No value set for following count (@${this.username})`);
            isValid = false;
        }
        return isValid;
    }
}

/** Stats associated with threads accounts */
export class ThreadsStats extends ProfileStatsBase {
    constructor() {
        super();
        this.platformName = 'Threads';
    }
}

/** Stats associated with newgrounds accounts */
export class NewgroundsStats extends ProfileStatsBase {
    // Post Counts
    /** Total number of news posts made by the account */
    public newsCount = 0;
    /** Total number of movie projects uploaded by the account */
    public moviesCount = 0;
    /** Total number of art posts made by the account */
    public artCount = 0;
    /** Total number of audio projects uploaded by the account */
    public audioCount = 0;
    /** Total number of game projects uploaded by the account */
    public gamesCount = 0;
    // Other Counts
    /** Total number of favorites from the account */
    public favesCount = 0;
    /** Total number of reviews the account has posted */
    public reviewsCount = 0;
    /** Total number of forum posts the account has made */
    public postsCount = 0;
    constructor() {
        super();
        this.platformName = 'Newgrounds';
        this.followerLabel = 'Fans';
    }
    public override print() {
        super.print();
        console.log(
            `News: ${this.newsCount}; Movies: ${this.moviesCount}; Art: ${this.artCount}; Audio: ${this.audioCount}; Games: ${this.gamesCount};`
        );
        console.log(`Faves: ${this.favesCount}; Reviews: ${this.reviewsCount}; Posts: ${this.postsCount}; `);
    }
}
/** Stats associated with soundcloud accounts */
export class SoundCloudStats extends ProfileStatsBase {
    /** Total number of audio tracks the account has uploaded */
    public tracks = 0;
    constructor() {
        super();
        this.platformName = 'SoundCloud';
    }
    public override print() {
        super.print();
        console.log('Tracks: ' + this.tracks);
    }
}
/** Stats associated with spotify accounts */
export class SpotifyStats extends ProfileStatsBase {
    /** The unique artist id referencing the spotify artist account */
    public artistId = '';
    constructor() {
        super();
        this.platformName = 'Spotify';
        this.followerLabel = 'Monthly Listeners';
    }
}
/** Stats associated with tiktok accounts */
export class TiktokStats extends ProfileStatsBase {
    /** Total number of likes that the account has received */
    public likes = -1;
    constructor() {
        super();
        this.platformName = 'Tik Tok';
    }
}
/** Stats associated with twitch accounts */
export class TwitchStats extends ProfileStatsBase {
    constructor() {
        super();
        this.platformName = 'Twitch';
    }
}
/** Stats associated with twitter accounts */
export class TwitterStats extends ProfileStatsBase {
    /** Total number of tweets that have been posted by the account */
    public totalTweets = -1;
    constructor() {
        super();
        this.platformName = 'Twitter';
    }
    public isValid() {
        return (
            this.timeRetrieved > 0 &&
            this.link !== '' &&
            this.username !== '' &&
            this.totalTweets > 0 &&
            this.followerCount > 0 &&
            this.followingCount > 0
        );
    }
}
/** Stats associated with youtube accounts */
export class YoutubeStats extends ProfileStatsBase {
    /** Total count of view for the youtube channel */
    public totalViews = 0;
    constructor() {
        super();
        this.platformName = 'YouTube';
        this.followerLabel = 'Subscribers';
    }
}

/** Object all stat object for a defined profile */
export class VanityPlateProfileStats {
    public id = '';
    public displayName = '';
    // Account Stats
    public youtubeStats: YoutubeStats[] = [];
    public instaStats: InstagramStats[] = [];
    public threadsStats: ThreadsStats[] = [];
    public spotifyStats: SpotifyStats[] = [];
    public newgroundsStats: NewgroundsStats[] = [];
    public soundcloudStats: SoundCloudStats[] = [];
    public twitterStats: TwitterStats[] = [];
    public twitchStats: TwitchStats[] = [];
    public tiktokStats: TiktokStats[] = [];

    public static getConcatStatsArray(profileStats: VanityPlateProfileStats): ProfileStatsBase[] {
      return [...profileStats.youtubeStats, ...profileStats.instaStats, ...profileStats.newgroundsStats, ...profileStats.soundcloudStats, ...profileStats.spotifyStats, ...profileStats.threadsStats, ...profileStats.tiktokStats, ...profileStats.twitchStats, ...profileStats.twitterStats];
    }
}
