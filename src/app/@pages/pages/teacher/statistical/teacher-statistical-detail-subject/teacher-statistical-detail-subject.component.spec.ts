import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStatisticalDetailSubjectComponent } from './teacher-statistical-detail-subject.component';

describe('TeacherStatisticalDetailSubjectComponent', () => {
  let component: TeacherStatisticalDetailSubjectComponent;
  let fixture: ComponentFixture<TeacherStatisticalDetailSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStatisticalDetailSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStatisticalDetailSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
