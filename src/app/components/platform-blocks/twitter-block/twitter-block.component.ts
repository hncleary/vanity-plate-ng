import { Component, Input } from '@angular/core';
import { TwitterStats } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-twitter-block',
  templateUrl: './twitter-block.component.html',
  styleUrls: ['./twitter-block.component.scss']
})
export class TwitterBlockComponent {
  @Input() stats: TwitterStats = new TwitterStats();
  public imgSrc = 'assets/twitter.png';
}
