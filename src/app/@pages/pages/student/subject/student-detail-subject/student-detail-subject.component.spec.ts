import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailSubjectComponent } from './student-detail-subject.component';

describe('StudentDetailSubjectComponent', () => {
  let component: StudentDetailSubjectComponent;
  let fixture: ComponentFixture<StudentDetailSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
