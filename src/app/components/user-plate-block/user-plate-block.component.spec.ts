import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlateBlockComponent } from './user-plate-block.component';

describe('UserPlateBlockComponent', () => {
  let component: UserPlateBlockComponent;
  let fixture: ComponentFixture<UserPlateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
