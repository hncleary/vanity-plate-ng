import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-plate-block',
    templateUrl: './user-plate-block.component.html',
    styleUrls: ['./user-plate-block.component.scss'],
})
export class UserPlateBlockComponent {
    @Input() public accountType:
        | 'youtube'
        | 'instagram'
        | 'threads'
        | 'twitter'
        | 'spotify'
        | 'newgrounds'
        | 'soundcloud'
        | 'twitch'
        | 'tiktok'
        | 'facebook'
        | 'none' = 'none';
}
