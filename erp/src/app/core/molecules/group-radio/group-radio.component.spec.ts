import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRadioComponent } from './group-radio.component';

describe('GroupRadioComponent', () => {
  let component: GroupRadioComponent;
  let fixture: ComponentFixture<GroupRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GroupRadioComponent]
    });
    fixture = TestBed.createComponent(GroupRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
