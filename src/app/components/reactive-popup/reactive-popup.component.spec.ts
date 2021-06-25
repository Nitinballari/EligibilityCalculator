import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePopupComponent } from './reactive-popup.component';

describe('ReactivePopupComponent', () => {
  let component: ReactivePopupComponent;
  let fixture: ComponentFixture<ReactivePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
