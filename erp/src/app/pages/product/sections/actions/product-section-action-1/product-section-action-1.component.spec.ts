import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionAction1Component } from './product-section-action-1.component';

describe('ProductSectionActionAComponent', () => {
  let component: ProductSectionAction1Component;
  let fixture: ComponentFixture<ProductSectionAction1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionAction1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSectionAction1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
