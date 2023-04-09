import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFilterListComponent } from './selected-filter-list.component';

describe('SelectedFilterListComponent', () => {
  let component: SelectedFilterListComponent;
  let fixture: ComponentFixture<SelectedFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedFilterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
