import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_ROUTES } from 'src/app/app-routing.module';
import { VanityDbService, VanityPlateSumCollection } from 'src/app/service/vanity-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sumCollection: VanityPlateSumCollection = new VanityPlateSumCollection();

  constructor(private _router: Router, private _dbSvc: VanityDbService) {}

  ngOnInit(): void { 
    void this.retrieveIndexList();
  }

  private async retrieveIndexList() { 
    const collection: VanityPlateSumCollection = await this._dbSvc.getUserIndexList();
    this.sumCollection = collection;
  }

  public goToUserPage(username: string) {
    this._router.navigateByUrl(`/${PAGE_ROUTES.USER}/${username}`)
  }
}
