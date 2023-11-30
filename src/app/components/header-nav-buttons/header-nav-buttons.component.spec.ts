import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderNavButtonsComponent } from './header-nav-buttons.component';

describe('HeaderNavButtonsComponent', () => {
    let component: HeaderNavButtonsComponent;
    let fixture: ComponentFixture<HeaderNavButtonsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [HeaderNavButtonsComponent],
        });
        fixture = TestBed.createComponent(HeaderNavButtonsComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
