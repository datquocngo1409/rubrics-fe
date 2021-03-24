import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAllSubjectComponent } from './teacher-all-subject.component';

describe('TeacherAllSubjectComponent', () => {
  let component: TeacherAllSubjectComponent;
  let fixture: ComponentFixture<TeacherAllSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAllSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAllSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
