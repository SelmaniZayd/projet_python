import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLeastTakeoffPlanesComponent } from './most-least-takeoff-planes.component';

describe('MostLeastTakeoffPlanesComponent', () => {
  let component: MostLeastTakeoffPlanesComponent;
  let fixture: ComponentFixture<MostLeastTakeoffPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostLeastTakeoffPlanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostLeastTakeoffPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
