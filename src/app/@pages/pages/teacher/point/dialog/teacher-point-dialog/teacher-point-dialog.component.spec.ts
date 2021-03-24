import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPointDialogComponent } from './teacher-point-dialog.component';

describe('TeacherPointDialogComponent', () => {
  let component: TeacherPointDialogComponent;
  let fixture: ComponentFixture<TeacherPointDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPointDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPointDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
