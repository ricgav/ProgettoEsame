import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOptionComponent } from './seller-option.component';

describe('SellerOptionComponent', () => {
  let component: SellerOptionComponent;
  let fixture: ComponentFixture<SellerOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
