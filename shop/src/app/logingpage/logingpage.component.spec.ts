import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingpageComponent } from './logingpage.component';

describe('LogingpageComponent', () => {
  let component: LogingpageComponent;
  let fixture: ComponentFixture<LogingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
