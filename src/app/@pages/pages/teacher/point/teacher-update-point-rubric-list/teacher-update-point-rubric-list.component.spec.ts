import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUpdatePointRubricListComponent } from './teacher-update-point-rubric-list.component';

describe('TeacherUpdatePointRubricListComponent', () => {
  let component: TeacherUpdatePointRubricListComponent;
  let fixture: ComponentFixture<TeacherUpdatePointRubricListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherUpdatePointRubricListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherUpdatePointRubricListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
