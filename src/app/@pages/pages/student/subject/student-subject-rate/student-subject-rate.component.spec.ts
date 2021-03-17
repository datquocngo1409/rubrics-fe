import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectRateComponent } from './student-subject-rate.component';

describe('StudentSubjectRateComponent', () => {
  let component: StudentSubjectRateComponent;
  let fixture: ComponentFixture<StudentSubjectRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubjectRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubjectRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
