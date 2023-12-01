import { Component, Input } from '@angular/core';
import { NewgroundsStats } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-newgrounds-block',
  templateUrl: './newgrounds-block.component.html',
  styleUrls: ['./newgrounds-block.component.scss']
})
export class NewgroundsBlockComponent {
  @Input() stats: NewgroundsStats = new NewgroundsStats();
  public imgSrc = 'assets/newgrounds.png';
}
