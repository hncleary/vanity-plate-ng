import { Component, Input } from '@angular/core';
import { SoundCloudStats } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-soundcloud-block',
  templateUrl: './soundcloud-block.component.html',
  styleUrls: ['./soundcloud-block.component.scss']
})
export class SoundcloudBlockComponent {
  @Input() stats: SoundCloudStats = new SoundCloudStats();
}
