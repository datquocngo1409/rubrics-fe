import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUpdatePointByRubricComponent } from './teacher-update-point-by-rubric.component';

describe('TeacherUpdatePointByRubricComponent', () => {
  let component: TeacherUpdatePointByRubricComponent;
  let fixture: ComponentFixture<TeacherUpdatePointByRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherUpdatePointByRubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherUpdatePointByRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
