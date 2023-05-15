import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRadioComponent } from './sidebar-radio.component';

describe('SidebarRadioComponent', () => {
  let component: SidebarRadioComponent;
  let fixture: ComponentFixture<SidebarRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidebarRadioComponent]
    });
    fixture = TestBed.createComponent(SidebarRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
