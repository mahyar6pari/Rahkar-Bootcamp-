import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskesFormsComponent } from './taskes-forms.component';

describe('TaskesFormsComponent', () => {
  let component: TaskesFormsComponent;
  let fixture: ComponentFixture<TaskesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskesFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
