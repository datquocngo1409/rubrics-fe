import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectStudentsComponent } from './student-subject-students.component';

describe('StudentSubjectStudentsComponent', () => {
  let component: StudentSubjectStudentsComponent;
  let fixture: ComponentFixture<StudentSubjectStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubjectStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubjectStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
