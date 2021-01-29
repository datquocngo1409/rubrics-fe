import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRubricComponent } from './request-rubric.component';

describe('RequestRubricComponent', () => {
  let component: RequestRubricComponent;
  let fixture: ComponentFixture<RequestRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
