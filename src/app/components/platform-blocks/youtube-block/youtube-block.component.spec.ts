import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeBlockComponent } from './youtube-block.component';

describe('YoutubeBlockComponent', () => {
  let component: YoutubeBlockComponent;
  let fixture: ComponentFixture<YoutubeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
