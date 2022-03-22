import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayweatherComponent } from './todayweather.component';

describe('TodayweatherComponent', () => {
  let component: TodayweatherComponent;
  let fixture: ComponentFixture<TodayweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
