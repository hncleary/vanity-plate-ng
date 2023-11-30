import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { VanityDbService } from './vanity-db.service';

describe('VanityDbService', () => {
    let service: VanityDbService;

    beforeEach(() => {
        const apiServiceStub = () => ({ getUrl: () => ({}) });
        TestBed.configureTestingModule({
            providers: [VanityDbService, { provide: ApiService, useFactory: apiServiceStub }],
        });
        service = TestBed.inject(VanityDbService);
    });

    it('can load instance', () => {
        expect(service).toBeTruthy();
    });
});
