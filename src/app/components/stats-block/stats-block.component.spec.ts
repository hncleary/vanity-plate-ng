import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StatsBlockComponent } from './stats-block.component';

describe('StatsBlockComponent', () => {
    let component: StatsBlockComponent;
    let fixture: ComponentFixture<StatsBlockComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [StatsBlockComponent],
        });
        fixture = TestBed.createComponent(StatsBlockComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
