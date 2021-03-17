import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStudiedSubjectComponent } from './student-studied-subject.component';

describe('StudentStudiedSubjectComponent', () => {
  let component: StudentStudiedSubjectComponent;
  let fixture: ComponentFixture<StudentStudiedSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStudiedSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStudiedSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
