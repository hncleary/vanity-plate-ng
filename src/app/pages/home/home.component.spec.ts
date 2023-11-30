import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { VanityDbService } from 'src/app/service/vanity-db.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        const vanityDbServiceStub = () => ({ getUserIndexList: () => ({}) });
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [HomeComponent],
            providers: [{ provide: VanityDbService, useFactory: vanityDbServiceStub }],
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
