import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBigComponent } from './rating-big.component';

describe('RatingBigComponent', () => {
  let component: RatingBigComponent;
  let fixture: ComponentFixture<RatingBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
