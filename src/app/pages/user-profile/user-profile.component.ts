import { Component} from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { VanityDbService, VanityPlateProfileStats } from 'src/app/service/vanity-db.service';
import { filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent{
  public loading = true;
  public userStats: VanityPlateProfileStats = new VanityPlateProfileStats();

  constructor(private _router: Router, private _dbSvc: VanityDbService) {
    this._router.events.pipe(filter((e) => e instanceof NavigationEnd), untilDestroyed(this)).subscribe((event) => { 
      const e = event as NavigationEnd;
      const url = e.url;
      const username = url.split('/u/').join('');
      void this.getStats(username);
    }); 
  }

  public async getStats(username: string) { 
    this.userStats = await this._dbSvc.getStatsForUser(username);
    this.loading = false;
  }
}
