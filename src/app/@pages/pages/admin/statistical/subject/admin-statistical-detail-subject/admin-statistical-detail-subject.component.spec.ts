import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticalDetailSubjectComponent } from './admin-statistical-detail-subject.component';

describe('AdminStatisticalDetailSubjectComponent', () => {
  let component: AdminStatisticalDetailSubjectComponent;
  let fixture: ComponentFixture<AdminStatisticalDetailSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatisticalDetailSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticalDetailSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
