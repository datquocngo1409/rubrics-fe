import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRubricComponent } from './detail-rubric.component';

describe('DetailRubricComponent', () => {
  let component: DetailRubricComponent;
  let fixture: ComponentFixture<DetailRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
