import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricSubjectComponent } from './rubric-subject.component';

describe('RubricSubjectComponent', () => {
  let component: RubricSubjectComponent;
  let fixture: ComponentFixture<RubricSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubricSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
