import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtomComponent } from './atom.component';

describe('AtomComponent', () => {
  let component: AtomComponent;
  let fixture: ComponentFixture<AtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
