import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahsolComponent } from './mahsol.component';

describe('MahsolComponent', () => {
  let component: MahsolComponent;
  let fixture: ComponentFixture<MahsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MahsolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MahsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
