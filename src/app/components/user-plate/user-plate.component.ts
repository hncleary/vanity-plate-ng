import { AfterViewInit, Component, Input } from '@angular/core';
import { FastAverageColor } from 'fast-average-color';
import { VanityPlateProfileStats, VanityPlateSum } from 'src/app/service/vanity-db.service';
@Component({
    selector: 'app-user-plate',
    templateUrl: './user-plate.component.html',
    styleUrls: ['./user-plate.component.scss'],
})
export class UserPlateComponent implements AfterViewInit {
    @Input() public userStats: VanityPlateProfileStats = new VanityPlateProfileStats();
    @Input() public userSum: VanityPlateSum = new VanityPlateSum();

    public userColor = '';
    public isUserColorDark = false;

    public youtubeAccounts = 0;
    public youtubeFollowers = 0;
    public youtubeViews = 0;

    public instagramAccounts = 0;
    public instagramFollowers = 0;

    public twitterAccounts = 0;
    public twitterFollowers = 0;

    public spotifyAccounts = 0;
    public spotifyFollowers = 0;

    public newgroundsAccounts = 0;
    public newgroundsFollowers = 0;

    public soundcloudAccounts = 0;
    public soundcloudFollowers = 0;

    public twitchAccounts = 0;
    public twitchFollowers = 0;

    public tiktokAccounts = 0;
    public tiktokFollowers = 0;

    ngAfterViewInit() {
        this.getProfileImgPalette();
        setTimeout(() => { 
          this.getAccountTotals();
        })
    }

    public getProfileImgPalette() {
      const fac = new FastAverageColor();
      const profileImage = document.querySelector('#profileImage') as HTMLImageElement;
      fac.getColorAsync(profileImage).then((color) => { 
        this.userColor = color.rgb;
        this.isUserColorDark = color.isDark;
      });
    }

    public getAccountTotals() { 
      // Youtube
      this.youtubeAccounts = this.userStats.youtubeStats.length;
      this.youtubeFollowers = this.sumArr(this.userStats.youtubeStats.map((a) => a.subscribers));
      this.youtubeViews = this.sumArr(this.userStats.youtubeStats.map((a) => a.totalViews));
      // Instagram
      this.instagramAccounts = this.userStats.instaStats.length;
      this.instagramFollowers = this.sumArr(this.userStats.instaStats.map((a) => a.followerCount));
      // Twitter 
      this.twitterAccounts = this.userStats.twitterStats.length;
      this.twitterFollowers = this.sumArr(this.userStats.twitterStats.map((a) => a.followerCount));
      // Spotify
      this.spotifyAccounts = this.userStats.spotifyStats.length;
      this.spotifyFollowers = this.sumArr(this.userStats.spotifyStats.map((a) => a.monthlyListeners));
      // Newgrounds
      this.newgroundsAccounts = this.userStats.newgroundsStats.length;
      this.newgroundsFollowers = this.sumArr(this.userStats.newgroundsStats.map((a) => a.fans));
      // SoundCloud
      this.soundcloudAccounts = this.userStats.soundcloudStats.length;
      this.soundcloudFollowers = this.sumArr(this.userStats.soundcloudStats.map((a) => a.followers));
      // Twitch
      this.twitchAccounts = this.userStats.twitchStats.length;
      this.twitchFollowers = this.sumArr(this.userStats.twitchStats.map((a) => a.followers));
      // TikTok
      this.tiktokAccounts = this.userStats.tiktokStats.length;
      this.tiktokFollowers = this.sumArr(this.userStats.tiktokStats.map((a) => a.followerCount));
    }

    public sumArr(numArr: number[]) { 
      let sum = 0;
      for(const num of numArr) { 
        sum += num;
      }
      return sum;
    }
}
