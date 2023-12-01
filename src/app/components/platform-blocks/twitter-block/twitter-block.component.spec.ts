import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterBlockComponent } from './twitter-block.component';

describe('TwitterBlockComponent', () => {
  let component: TwitterBlockComponent;
  let fixture: ComponentFixture<TwitterBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
