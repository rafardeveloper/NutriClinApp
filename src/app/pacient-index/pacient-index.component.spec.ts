import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientIndexComponent } from './pacient-index.component';

describe('PacientIndexComponent', () => {
  let component: PacientIndexComponent;
  let fixture: ComponentFixture<PacientIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientIndexComponent]
    });
    fixture = TestBed.createComponent(PacientIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
