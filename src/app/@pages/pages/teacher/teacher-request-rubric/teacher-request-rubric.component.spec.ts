import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRequestRubricComponent } from './teacher-request-rubric.component';

describe('TeacherRequestRubricComponent', () => {
  let component: TeacherRequestRubricComponent;
  let fixture: ComponentFixture<TeacherRequestRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRequestRubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRequestRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
