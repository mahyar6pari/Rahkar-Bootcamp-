import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskesIteamsComponent } from './taskes-iteams.component';

describe('TaskesIteamsComponent', () => {
  let component: TaskesIteamsComponent;
  let fixture: ComponentFixture<TaskesIteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskesIteamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskesIteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
