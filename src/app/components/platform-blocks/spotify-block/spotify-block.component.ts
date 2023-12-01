import { Component, Input } from '@angular/core';
import { SpotifyStats } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-spotify-block',
  templateUrl: './spotify-block.component.html',
  styleUrls: ['./spotify-block.component.scss']
})
export class SpotifyBlockComponent {
  @Input() stats: SpotifyStats = new SpotifyStats();
  public imgSrc = 'assets/spotify.png';
}
