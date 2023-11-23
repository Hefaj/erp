import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HGatewayComponent } from './h-gateway.component';

describe('HGatewayComponent', () => {
  let component: HGatewayComponent;
  let fixture: ComponentFixture<HGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HGatewayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
