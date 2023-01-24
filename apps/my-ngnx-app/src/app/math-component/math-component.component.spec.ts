import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathComponentComponent } from './math-component.component';

describe('MathComponentComponent', () => {
  let component: MathComponentComponent;
  let fixture: ComponentFixture<MathComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MathComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
