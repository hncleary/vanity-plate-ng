import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgroundsBlockComponent } from './newgrounds-block.component';

describe('NewgroundsBlockComponent', () => {
  let component: NewgroundsBlockComponent;
  let fixture: ComponentFixture<NewgroundsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgroundsBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgroundsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
