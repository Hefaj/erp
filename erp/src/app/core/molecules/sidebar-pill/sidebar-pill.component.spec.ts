import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPillComponent } from './sidebar-pill.component';

describe('SidebarPillComponent', () => {
  let component: SidebarPillComponent;
  let fixture: ComponentFixture<SidebarPillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidebarPillComponent]
    });
    fixture = TestBed.createComponent(SidebarPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
