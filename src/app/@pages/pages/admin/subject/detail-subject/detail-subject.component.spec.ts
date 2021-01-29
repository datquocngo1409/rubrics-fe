import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSubjectComponent } from './detail-subject.component';

describe('DetailSubjectComponent', () => {
  let component: DetailSubjectComponent;
  let fixture: ComponentFixture<DetailSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
