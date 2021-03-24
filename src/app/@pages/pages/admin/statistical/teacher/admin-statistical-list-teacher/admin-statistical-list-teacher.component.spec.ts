import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticalListTeacherComponent } from './admin-statistical-list-teacher.component';

describe('AdminStatisticalListTeacherComponent', () => {
  let component: AdminStatisticalListTeacherComponent;
  let fixture: ComponentFixture<AdminStatisticalListTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticalListTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticalListTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
