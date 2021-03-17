import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAllSubjectComponent } from './student-all-subject.component';

describe('StudentAllSubjectComponent', () => {
  let component: StudentAllSubjectComponent;
  let fixture: ComponentFixture<StudentAllSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAllSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAllSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
