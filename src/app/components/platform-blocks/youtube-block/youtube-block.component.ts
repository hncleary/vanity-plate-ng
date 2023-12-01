import { Component, Input } from '@angular/core';
import { YtStats } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-youtube-block',
  templateUrl: './youtube-block.component.html',
  styleUrls: ['./youtube-block.component.scss']
})
export class YoutubeBlockComponent {
  @Input() stats: YtStats = new YtStats();
}
