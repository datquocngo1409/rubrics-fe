import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticalListSubjectComponent } from './admin-statistical-list-subject.component';

describe('AdminStatisticalListSubjectComponent', () => {
  let component: AdminStatisticalListSubjectComponent;
  let fixture: ComponentFixture<AdminStatisticalListSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticalListSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticalListSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
