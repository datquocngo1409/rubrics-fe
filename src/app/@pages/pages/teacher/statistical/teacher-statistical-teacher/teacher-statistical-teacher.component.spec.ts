import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStatisticalTeacherComponent } from './teacher-statistical-teacher.component';

describe('TeacherStatisticalTeacherComponent', () => {
  let component: TeacherStatisticalTeacherComponent;
  let fixture: ComponentFixture<TeacherStatisticalTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStatisticalTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStatisticalTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
