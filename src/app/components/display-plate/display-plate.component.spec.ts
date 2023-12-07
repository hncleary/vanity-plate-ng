import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlateComponent } from './display-plate.component';

describe('DisplayPlateComponent', () => {
  let component: DisplayPlateComponent;
  let fixture: ComponentFixture<DisplayPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
