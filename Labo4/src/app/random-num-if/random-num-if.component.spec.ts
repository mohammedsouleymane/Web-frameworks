import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumIfComponent } from './random-num-if.component';

describe('RandomNumIfComponent', () => {
  let component: RandomNumIfComponent;
  let fixture: ComponentFixture<RandomNumIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomNumIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
