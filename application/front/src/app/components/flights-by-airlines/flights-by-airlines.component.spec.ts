import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsByAirlinesComponent } from './flights-by-airlines.component';

describe('FlightsByAirlinesComponent', () => {
  let component: FlightsByAirlinesComponent;
  let fixture: ComponentFixture<FlightsByAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsByAirlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsByAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
