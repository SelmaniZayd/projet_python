import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLeastDestAirportsComponent } from './most-least-dest-airports.component';

describe('MostLeastDestAirportsComponent', () => {
  let component: MostLeastDestAirportsComponent;
  let fixture: ComponentFixture<MostLeastDestAirportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostLeastDestAirportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostLeastDestAirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
