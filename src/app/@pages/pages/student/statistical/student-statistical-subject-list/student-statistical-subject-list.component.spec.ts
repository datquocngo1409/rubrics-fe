import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStatisticalSubjectListComponent } from './student-statistical-subject-list.component';

describe('StudentStatisticalSubjectListComponent', () => {
  let component: StudentStatisticalSubjectListComponent;
  let fixture: ComponentFixture<StudentStatisticalSubjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStatisticalSubjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStatisticalSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
