import { Component, Input } from '@angular/core';
import { TikTokStats } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-tiktok-block',
  templateUrl: './tiktok-block.component.html',
  styleUrls: ['./tiktok-block.component.scss']
})
export class TiktokBlockComponent {
  @Input() stats: TikTokStats = new TikTokStats();
  public imgSrc = 'assets/tiktok.png';
}
