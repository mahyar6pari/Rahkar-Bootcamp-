import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahsolRouteComponent } from './mahsol-route.component';

describe('MahsolRouteComponent', () => {
  let component: MahsolRouteComponent;
  let fixture: ComponentFixture<MahsolRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MahsolRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MahsolRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
