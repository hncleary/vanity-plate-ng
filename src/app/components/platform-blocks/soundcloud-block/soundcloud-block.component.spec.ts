import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundcloudBlockComponent } from './soundcloud-block.component';

describe('SoundcloudBlockComponent', () => {
  let component: SoundcloudBlockComponent;
  let fixture: ComponentFixture<SoundcloudBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundcloudBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundcloudBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
