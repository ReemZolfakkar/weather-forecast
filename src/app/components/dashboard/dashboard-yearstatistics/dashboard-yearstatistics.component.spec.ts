import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardYearstatisticsComponent } from './dashboard-yearstatistics.component';

describe('DashboardYearstatisticsComponent', () => {
  let component: DashboardYearstatisticsComponent;
  let fixture: ComponentFixture<DashboardYearstatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardYearstatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardYearstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
