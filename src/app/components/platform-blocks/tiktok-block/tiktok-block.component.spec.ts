import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokBlockComponent } from './tiktok-block.component';

describe('TiktokBlockComponent', () => {
  let component: TiktokBlockComponent;
  let fixture: ComponentFixture<TiktokBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiktokBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
