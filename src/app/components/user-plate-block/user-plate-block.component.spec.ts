import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserPlateBlockComponent } from './user-plate-block.component';

describe('UserPlateBlockComponent', () => {
    let component: UserPlateBlockComponent;
    let fixture: ComponentFixture<UserPlateBlockComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [UserPlateBlockComponent],
        });
        fixture = TestBed.createComponent(UserPlateBlockComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
