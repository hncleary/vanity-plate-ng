import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WhatsNewComponent } from './whats-new.component';

describe('WhatsNewComponent', () => {
    let component: WhatsNewComponent;
    let fixture: ComponentFixture<WhatsNewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [WhatsNewComponent],
        });
        fixture = TestBed.createComponent(WhatsNewComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
