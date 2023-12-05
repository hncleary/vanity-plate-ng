import { Component, Input } from '@angular/core';
import { TwitchStats } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-twitch-block',
  templateUrl: './twitch-block.component.html',
  styleUrls: ['./twitch-block.component.scss']
})
export class TwitchBlockComponent {
  @Input() stats: TwitchStats = new TwitchStats();
  public imgSrc = 'assets/twitch.png';
}
