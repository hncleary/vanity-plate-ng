import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBlockComponent } from './stats-block.component';

describe('StatsBlockComponent', () => {
  let component: StatsBlockComponent;
  let fixture: ComponentFixture<StatsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
