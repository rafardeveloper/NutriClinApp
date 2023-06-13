import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAndExitNavbarComponent } from './back-and-exit-navbar.component';

describe('BackAndExitNavbarComponent', () => {
  let component: BackAndExitNavbarComponent;
  let fixture: ComponentFixture<BackAndExitNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackAndExitNavbarComponent]
    });
    fixture = TestBed.createComponent(BackAndExitNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
