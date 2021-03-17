import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectRubricComponent } from './student-subject-rubric.component';

describe('StudentSubjectRubricComponent', () => {
  let component: StudentSubjectRubricComponent;
  let fixture: ComponentFixture<StudentSubjectRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubjectRubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubjectRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
