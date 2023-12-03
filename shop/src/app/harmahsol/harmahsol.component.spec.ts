import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmahsolComponent } from './harmahsol.component';

describe('HarmahsolComponent', () => {
  let component: HarmahsolComponent;
  let fixture: ComponentFixture<HarmahsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarmahsolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarmahsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
