import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameForTwoComponent } from './game-for-two.component';

describe('GameForTwoComponent', () => {
  let component: GameForTwoComponent;
  let fixture: ComponentFixture<GameForTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameForTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameForTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
