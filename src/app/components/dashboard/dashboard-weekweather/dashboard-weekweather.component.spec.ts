import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWeekweatherComponent } from './dashboard-weekweather.component';

describe('DashboardWeekweatherComponent', () => {
  let component: DashboardWeekweatherComponent;
  let fixture: ComponentFixture<DashboardWeekweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWeekweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWeekweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
