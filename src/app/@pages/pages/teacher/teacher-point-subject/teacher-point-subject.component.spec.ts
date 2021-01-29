import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPointSubjectComponent } from './teacher-point-subject.component';

describe('TeacherPointSubjectComponent', () => {
  let component: TeacherPointSubjectComponent;
  let fixture: ComponentFixture<TeacherPointSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPointSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPointSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
