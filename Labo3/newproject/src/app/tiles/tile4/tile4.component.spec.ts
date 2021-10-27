import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tile4Component } from './tile4.component';

describe('Tile4Component', () => {
  let component: Tile4Component;
  let fixture: ComponentFixture<Tile4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tile4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tile4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
