import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserPlateComponent } from './user-plate.component';

describe('UserPlateComponent', () => {
    let component: UserPlateComponent;
    let fixture: ComponentFixture<UserPlateComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [UserPlateComponent],
        });
        fixture = TestBed.createComponent(UserPlateComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
