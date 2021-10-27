import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tile3Component } from './tile3.component';

describe('Tile3Component', () => {
  let component: Tile3Component;
  let fixture: ComponentFixture<Tile3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tile3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
