import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStatisticalListSubjectComponent } from './teacher-statistical-list-subject.component';

describe('TeacherStatisticalListSubjectComponent', () => {
  let component: TeacherStatisticalListSubjectComponent;
  let fixture: ComponentFixture<TeacherStatisticalListSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherStatisticalListSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStatisticalListSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
