import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPillComponent } from './group-pill.component';

describe('GroupPillComponent', () => {
  let component: GroupPillComponent;
  let fixture: ComponentFixture<GroupPillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GroupPillComponent]
    });
    fixture = TestBed.createComponent(GroupPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
