import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBarComponent } from './change-bar.component';

describe('ChangeBarComponent', () => {
  let component: ChangeBarComponent;
  let fixture: ComponentFixture<ChangeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
