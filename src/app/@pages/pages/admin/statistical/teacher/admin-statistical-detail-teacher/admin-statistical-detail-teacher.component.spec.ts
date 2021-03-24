import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticalDetailTeacherComponent } from './admin-statistical-detail-teacher.component';

describe('AdminStatisticalDetailTeacherComponent', () => {
  let component: AdminStatisticalDetailTeacherComponent;
  let fixture: ComponentFixture<AdminStatisticalDetailTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticalDetailTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticalDetailTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
