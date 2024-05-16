import { TestBed } from '@angular/core/testing';
import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
    let pipe: SearchInputComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [SearchInputComponent] });
        pipe = TestBed.inject(SearchInputComponent);
    });

    it('can load instance', () => {
        expect(pipe).toBeTruthy();
    });
});
