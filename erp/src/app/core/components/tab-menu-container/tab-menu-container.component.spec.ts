import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenuContainerComponent } from './tab-menu-container.component';

describe('TabMenuContainerComponent', () => {
  let component: TabMenuContainerComponent;
  let fixture: ComponentFixture<TabMenuContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMenuContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
