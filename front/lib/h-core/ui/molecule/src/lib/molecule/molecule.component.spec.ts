import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoleculeComponent } from './molecule.component';

describe('MoleculeComponent', () => {
  let component: MoleculeComponent;
  let fixture: ComponentFixture<MoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
