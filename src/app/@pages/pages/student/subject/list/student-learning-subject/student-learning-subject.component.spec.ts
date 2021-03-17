import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLearningSubjectComponent } from './student-learning-subject.component';

describe('StudentLearningSubjectComponent', () => {
  let component: StudentLearningSubjectComponent;
  let fixture: ComponentFixture<StudentLearningSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLearningSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLearningSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
