import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTaughtSubjectComponent } from './teacher-taught-subject.component';

describe('TeacherTaughtSubjectComponent', () => {
  let component: TeacherTaughtSubjectComponent;
  let fixture: ComponentFixture<TeacherTaughtSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTaughtSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTaughtSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
