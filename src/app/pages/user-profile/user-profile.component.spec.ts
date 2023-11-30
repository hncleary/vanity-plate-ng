import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { VanityDbService } from 'src/app/service/vanity-db.service';
import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
    let pipe: UserProfileComponent;

    beforeEach(() => {
        const routerStub = () => ({
            events: { pipe: () => ({ subscribe: () => ({}) }) },
        });
        const vanityDbServiceStub = () => ({ getStatsForUser: () => ({}) });
        TestBed.configureTestingModule({
            providers: [
                UserProfileComponent,
                { provide: Router, useFactory: routerStub },
                { provide: VanityDbService, useFactory: vanityDbServiceStub },
            ],
        });
        spyOn(UserProfileComponent.prototype, 'getStats');
        pipe = TestBed.inject(UserProfileComponent);
    });

    it('can load instance', () => {
        expect(pipe).toBeTruthy();
    });
});
