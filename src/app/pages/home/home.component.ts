import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_ROUTES } from 'src/app/app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly testUsers: string[] = ['cyranek', 'test'];

  constructor(private _router: Router) {}

  ngOnInit(): void { 
    console.log('Home Page')
  }

  public goToUserPage(username: string) {
    console.log(username);
    this._router.navigateByUrl(`/${PAGE_ROUTES.USER}/${username}`)
  }
}
