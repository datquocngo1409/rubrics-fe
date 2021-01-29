import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequestRubricComponent } from './detail-request-rubric.component';

describe('DetailRequestRubricComponent', () => {
  let component: DetailRequestRubricComponent;
  let fixture: ComponentFixture<DetailRequestRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRequestRubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRequestRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
