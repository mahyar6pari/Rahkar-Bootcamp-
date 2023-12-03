import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcalaComponent } from './navbarcala.component';

describe('NavbarcalaComponent', () => {
  let component: NavbarcalaComponent;
  let fixture: ComponentFixture<NavbarcalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarcalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarcalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
