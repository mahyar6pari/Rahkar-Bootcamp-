import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabtComponent } from './sabt.component';

describe('SabtComponent', () => {
  let component: SabtComponent;
  let fixture: ComponentFixture<SabtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SabtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SabtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
