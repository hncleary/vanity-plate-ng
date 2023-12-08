import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-account-block',
    templateUrl: './account-block.component.html',
    styleUrls: ['./account-block.component.scss'],
})
export class AccountBlockComponent implements AfterViewInit {
    @Input() public accountImg = '';
    @Input() public backupImg = '';
    @Input() public link = '';
    @Input() public accountType:
        | 'youtube'
        | 'instagram'
        | 'twitter'
        | 'spotify'
        | 'newgrounds'
        | 'soundcloud'
        | 'twitch'
        | 'tiktok'
        | 'none' = 'none';
    public accountImgSrc = '';
    public roundLess = false;
    public ngAfterViewInit(): void {
      setTimeout(() => { 
        switch (this.accountType) {
            case 'youtube':
                this.accountImgSrc = 'assets/youtube.png';
                break;
            case 'instagram':
                this.accountImgSrc = 'assets/instagram-circle.png';
                break;
            case 'twitter':
                this.accountImgSrc = 'assets/twitter.png';
                break;
            case 'newgrounds':
                this.roundLess = true;
                break;
            case 'soundcloud':
                this.accountImgSrc = 'assets/soundcloud.png';
                break;
            case 'twitch':
                this.accountImgSrc = 'assets/twitch-square.png';
                break;
            case 'tiktok':
                this.accountImgSrc = 'assets/tiktok-square.png';
                break;
        }
      });
    }

    public openLink() {
        window.open(this.link, '_blank');
    }
}
