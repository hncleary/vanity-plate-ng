import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyBlockComponent } from './spotify-block.component';

describe('SpotifyBlockComponent', () => {
  let component: SpotifyBlockComponent;
  let fixture: ComponentFixture<SpotifyBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
