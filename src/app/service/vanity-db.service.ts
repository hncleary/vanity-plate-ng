import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VanityDbService {

  private readonly statsFolderUrl: string = 'https://raw.githubusercontent.com/hncleary/vanity-plate-db/main/stats/'
  private readonly statsJsonSuffix: string = '-stats.json'

  constructor(private _apiSvc: ApiService) { }

  /** Retrieve the complete stats object for a user */
  public async getStatsForUser(username: string): Promise<VanityPlateProfileStats> {
    const json = await firstValueFrom(this._apiSvc.getUrl(`${this.statsFolderUrl}${username}${this.statsJsonSuffix}`));
    return json as VanityPlateProfileStats;
  }
  /** Retrieve the index of users available within the database */
  public async getUserIndexList(): Promise<VanityPlateSumCollection> {
    const json = await firstValueFrom(this._apiSvc.getUrl(`${this.statsFolderUrl}/db_summary.json`));
    return json as VanityPlateSumCollection;
  }
}

/** Object all stat object for a defined profile */
export class VanityPlateProfileStats { 
  public youtubeStats: YtStats[] = [];
  public instaStats: InstagramStats[] = [];
  public spotifyStats: SpotifyStats[] = [];
  public newgroundsStats: NewgroundsStats[] = []
  public soundcloudStats: SoundCloudStats[] = [];
  public twitterStats: TwitterStats[] = [];
  public twitchStats: TwitchStats[] = [];
}

export class VanityPlateSum {
  /** The defined accounts Vanity-Plate-Social id / username */
  public username = '';
  /** Total number of followers the defined account has across all platforms */
  public totalFollowers = 0;
}

export class VanityPlateSumCollection {
  /** List of vanity plate profiles summation indexes */
  public sums: VanityPlateSum[] = [];
  /** Timestamp for when these items were recorded */
  public timeRetrieved = 0;
}

export class YtStats {
    timeRetrieved = 0;
    link = '';
    displayName = '';
    handle = '';
    totalViews = 0;
    subscribers = 0;
    iconUrl = '';
    iconBas64 = '';
}

export class InstagramStats {
  timeRetrieved = 0;
  link = '';
  displayName = '';
  handle = ';';
  totalPosts = 0;
  followerCount = 0;
  followingCount = 0;
  iconBase64 = '';
}

export class SpotifyStats { 
  timeRetrieved = 0;
  link = '';
  artistId = '';
  displayName = '';
  monthlyListeners = 0;
}

export class NewgroundsStats {
  timeRetrieved = 0;
  link = '';
  displayName = '';
  username = '';
  fans = 0;
  // Post Counts
  newsCount = 0;
  moviesCount = 0;
  artCount = 0;
  audioCount = 0;
  gamesCount = 0;
  // Other Counts
  favesCount = 0;
  reviewsCount = 0;
  postsCount = 0;
}

export class SoundCloudStats {
  timeRetrieved = 0;
  link = '';
  displayName = '';
  username = ';';
  followers = 0;
  iconUrl = '';
  iconBas64 = '';
  following = 0;
  tracks = 0;
}

export class TwitterStats {
  timeRetrieved = 0;
  link = '';
  displayName = '';
  handle = ';';
  totalTweets = 0;
  followerCount = 0;
  followingCount = 0;
  iconUrl = '';
  iconBase64 = '';
}

export class TwitchStats {
  timeRetrieved = 0;
  link = '';
  displayName = '';
  username = '';
  followers = 0;
  iconUrl = '';
  iconBas64 = '';
}
