import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSectionContent2Component } from './product-section-content-2.component';

describe('ProductSectionContentAComponent', () => {
  let component: ProductSectionContent2Component;
  let fixture: ComponentFixture<ProductSectionContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSectionContent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSectionContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
