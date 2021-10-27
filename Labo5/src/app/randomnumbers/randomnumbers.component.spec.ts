import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomnumbersComponent } from './randomnumbers.component';

describe('RandomnumbersComponent', () => {
  let component: RandomnumbersComponent;
  let fixture: ComponentFixture<RandomnumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomnumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomnumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
