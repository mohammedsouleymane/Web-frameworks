import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNgForComponent } from './weather-ng-for.component';

describe('WeatherNgForComponent', () => {
  let component: WeatherNgForComponent;
  let fixture: ComponentFixture<WeatherNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
