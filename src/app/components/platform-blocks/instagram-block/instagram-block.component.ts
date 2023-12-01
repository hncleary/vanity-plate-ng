import { Component, Input } from '@angular/core';
import { InstagramStats } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-instagram-block',
  templateUrl: './instagram-block.component.html',
  styleUrls: ['./instagram-block.component.scss']
})
export class InstagramBlockComponent {
  @Input() stats: InstagramStats = new InstagramStats();
}
