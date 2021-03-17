import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotyetSubjectComponent } from './student-notyet-subject.component';

describe('StudentNotyetSubjectComponent', () => {
  let component: StudentNotyetSubjectComponent;
  let fixture: ComponentFixture<StudentNotyetSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNotyetSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNotyetSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
