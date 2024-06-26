import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AccountBlockComponent } from './account-block.component';

describe('AccountBlockComponent', () => {
    let component: AccountBlockComponent;
    let fixture: ComponentFixture<AccountBlockComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [AccountBlockComponent],
        });
        fixture = TestBed.createComponent(AccountBlockComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
