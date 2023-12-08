import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBlockComponent } from './account-block.component';

describe('AccountBlockComponent', () => {
  let component: AccountBlockComponent;
  let fixture: ComponentFixture<AccountBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
