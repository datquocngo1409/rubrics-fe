import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPointComponent } from './your-point.component';

describe('YourPointComponent', () => {
  let component: YourPointComponent;
  let fixture: ComponentFixture<YourPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
