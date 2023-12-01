import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchBlockComponent } from './twitch-block.component';

describe('TwitchBlockComponent', () => {
  let component: TwitchBlockComponent;
  let fixture: ComponentFixture<TwitchBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
