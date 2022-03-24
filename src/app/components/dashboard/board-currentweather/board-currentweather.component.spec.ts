import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCurrentweatherComponent } from './board-currentweather.component';

describe('BoardCurrentweatherComponent', () => {
  let component: BoardCurrentweatherComponent;
  let fixture: ComponentFixture<BoardCurrentweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCurrentweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCurrentweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
