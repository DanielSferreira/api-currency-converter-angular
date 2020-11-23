import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCurrencyCodeComponent } from './select-currency-code.component';

describe('SelectCurrencyCodeComponent', () => {
  let component: SelectCurrencyCodeComponent;
  let fixture: ComponentFixture<SelectCurrencyCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCurrencyCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCurrencyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
