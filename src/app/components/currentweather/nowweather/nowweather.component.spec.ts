import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowweatherComponent } from './nowweather.component';

describe('NowweatherComponent', () => {
  let component: NowweatherComponent;
  let fixture: ComponentFixture<NowweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
