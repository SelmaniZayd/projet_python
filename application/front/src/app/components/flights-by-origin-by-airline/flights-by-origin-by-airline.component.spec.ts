import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsByOriginByAirlineComponent } from './flights-by-origin-by-airline.component';

describe('FlightsByOriginByAirlineComponent', () => {
  let component: FlightsByOriginByAirlineComponent;
  let fixture: ComponentFixture<FlightsByOriginByAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsByOriginByAirlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsByOriginByAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
