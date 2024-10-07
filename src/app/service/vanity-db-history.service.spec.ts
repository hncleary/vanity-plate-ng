import { TestBed } from '@angular/core/testing';

import { VanityDbHistoryService } from './vanity-db-history.service';

describe('VanityDbHistoryService', () => {
    let service: VanityDbHistoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(VanityDbHistoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
