import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionsComponent } from './page-sections.component';

describe('PageSectionsComponent', () => {
  let component: PageSectionsComponent;
  let fixture: ComponentFixture<PageSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
