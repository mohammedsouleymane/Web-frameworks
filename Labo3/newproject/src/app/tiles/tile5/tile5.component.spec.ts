import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tile5Component } from './tile5.component';

describe('Tile5Component', () => {
  let component: Tile5Component;
  let fixture: ComponentFixture<Tile5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tile5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tile5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
