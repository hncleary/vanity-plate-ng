import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlateComponent } from './user-plate.component';

describe('UserPlateComponent', () => {
  let component: UserPlateComponent;
  let fixture: ComponentFixture<UserPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
