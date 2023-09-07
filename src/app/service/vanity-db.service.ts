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

  public async getStatsForUser(username: string): Promise<VanityPlateProfileStats> {
    const json = await firstValueFrom(this._apiSvc.getUrl(`${this.statsFolderUrl}${username}${this.statsJsonSuffix}`));
    console.log(json);
    return json as VanityPlateProfileStats;
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

  // public static printAll(profileStats: VanityPlateProfileStats) { 
  //     // Print All Stats
  //     for(const key of Object.keys(profileStats)) { 
  //         if(!!profileStats[key] && profileStats[key].length > 0 ) { 
  //             for(const statObj of profileStats[key]) { 
  //                 if(!!statObj?.print) { 
  //                     statObj.print();
  //                     console.log('-----------')
  //                 }
  //             }
  //         }
  //     }
  // }
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

  public print() { 
      console.log('YouTube ' + this.displayName + ' Info:');
      console.log('Handle (@): ' + this.handle);
      console.log('Total Views: ' + this.totalViews);
      console.log('Total Subscribers: ' + this.subscribers);
  }
}

export class InstagramStats { 
  timeRetrieved = 0;
  link = '';
  displayName = '';
  handle = ';'
  totalPosts = 0;
  followerCount = 0;
  followingCount = 0;
  iconBase64 = '';

  public print() { 
      console.log('Instagram ' + this.displayName + ' Info:');
      console.log('Handle (@): ' + this.handle);
      console.log('Total Followers: ' + this.followerCount);
      console.log('Total Following: ' + this.followingCount);
      console.log('Total Posts: ' + this.totalPosts);
  }
}

export class SpotifyStats { 
  timeRetrieved = 0;
  link = '';
  artistId = '';
  displayName = '';
  monthlyListeners = 0;
  // TODO (?) - Likely requires Spotify API integration
  // followers: number = 0;
  // iconUrl: string = '';
  // iconBase64: string = '';

  public print() { 
      console.log('Spotify [' + this.displayName + '] Info:');
      console.log('Monthly Listeners: ' + this.monthlyListeners);
  }
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

  public print() { 
      console.log('Newgrounds ' + this.displayName + ' Info:');
      console.log('Fans: ' + this.fans);
      console.log(`News: ${this.newsCount}; Movies: ${this.moviesCount}; Art: ${this.artCount}; Audio: ${this.audioCount}; Games: ${this.gamesCount};`);
      console.log(`Faves: ${this.favesCount}; Reviews: ${this.reviewsCount}; Posts: ${this.postsCount}; `);
  }
}

export class SoundCloudStats { 
  timeRetrieved = 0;
  link = '';
  displayName = '';
  username = ';'
  followers = 0;
  iconUrl = '';
  iconBas64 = '';
  following = 0;
  tracks = 0;

  public print() { 
      console.log('SoundCloud ' + this.displayName + ' Info:');
      console.log('Username: ' + this.username);
      console.log('Total Followers: ' + this.followers);
      console.log('Following: ' + this.following);
      console.log('Tracks: ' + this.tracks);
  }
}

export class TwitterStats { 
  timeRetrieved = 0;
  link = '';
  displayName = '';
  handle = ';'
  totalTweets = 0;
  followerCount = 0;
  followingCount = 0;
  iconUrl = '';
  iconBase64 = '';

  public print() { 
      console.log('Twitter ' + this.displayName + ' Info:');
      console.log('Handle (@): ' + this.handle);
      console.log('Total Followers: ' + this.followerCount);
      console.log('Total Following: ' + this.followingCount);
      console.log('Total Tweets: ' + this.totalTweets);
  }
}

export class TwitchStats { 
  timeRetrieved = 0;
  link = '';
  displayName = '';
  username = '';
  followers = 0;
  iconUrl = '';
  iconBas64 = '';

  public print() { 
      console.log('Twitch [' + this.displayName + '] Info:');
      console.log('Username: ' + this.username);
      console.log('Total Followers: ' + this.followers);
  }
}