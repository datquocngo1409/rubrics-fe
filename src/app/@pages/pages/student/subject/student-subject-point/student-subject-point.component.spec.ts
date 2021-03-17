import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectPointComponent } from './student-subject-point.component';

describe('StudentSubjectPointComponent', () => {
  let component: StudentSubjectPointComponent;
  let fixture: ComponentFixture<StudentSubjectPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubjectPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubjectPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
