import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { VanityDbService } from 'src/app/service/vanity-db.service';
import { HomeComponent } from './home.component';
import { GenericFilterPipe } from 'src/app/pipes/generic-filter.pipe';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        const routerStub = () => ({});
        const vanityDbServiceStub = () => ({ getUserIndexList: () => ({}) });
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [HomeComponent, GenericFilterPipe],
            providers: [
                { provide: Router, useFactory: routerStub },
                { provide: VanityDbService, useFactory: vanityDbServiceStub },
            ],
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
