import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTeachingSubjectComponent } from './teacher-teaching-subject.component';

describe('TeacherTeachingSubjectComponent', () => {
  let component: TeacherTeachingSubjectComponent;
  let fixture: ComponentFixture<TeacherTeachingSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTeachingSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTeachingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
