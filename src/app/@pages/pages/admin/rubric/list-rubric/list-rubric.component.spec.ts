import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRubricComponent } from './list-rubric.component';

describe('ListRubricComponent', () => {
  let component: ListRubricComponent;
  let fixture: ComponentFixture<ListRubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
