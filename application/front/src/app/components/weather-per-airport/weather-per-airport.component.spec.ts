import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPerAirportComponent } from './weather-per-airport.component';

describe('WeatherPerAirportComponent', () => {
  let component: WeatherPerAirportComponent;
  let fixture: ComponentFixture<WeatherPerAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPerAirportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPerAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
