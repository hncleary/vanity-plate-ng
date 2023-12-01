import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramBlockComponent } from './instagram-block.component';

describe('InstagramBlockComponent', () => {
  let component: InstagramBlockComponent;
  let fixture: ComponentFixture<InstagramBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
