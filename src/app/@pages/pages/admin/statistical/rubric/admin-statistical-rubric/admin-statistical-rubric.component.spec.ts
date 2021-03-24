import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticalRubricComponent } from './admin-statistical-rubric.component';

describe('AdminStatisticalRubricComponent', () => {
  let component: AdminStatisticalRubricComponent;
  let fixture: ComponentFixture<AdminStatisticalRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticalRubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticalRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
