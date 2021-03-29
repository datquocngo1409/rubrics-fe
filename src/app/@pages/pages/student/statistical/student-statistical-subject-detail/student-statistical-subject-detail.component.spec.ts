import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStatisticalSubjectDetailComponent } from './student-statistical-subject-detail.component';

describe('StudentStatisticalSubjectDetailComponent', () => {
  let component: StudentStatisticalSubjectDetailComponent;
  let fixture: ComponentFixture<StudentStatisticalSubjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStatisticalSubjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStatisticalSubjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
