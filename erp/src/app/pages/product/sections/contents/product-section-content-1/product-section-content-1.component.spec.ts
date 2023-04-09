import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionContent1Component } from './product-section-content-1.component';

describe('ProductSectionContentAComponent', () => {
  let component: ProductSectionContent1Component;
  let fixture: ComponentFixture<ProductSectionContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionContent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSectionContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
