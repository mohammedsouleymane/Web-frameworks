import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToggleComponentComponent } from './text-toggle-component.component';

describe('TextToggleComponentComponent', () => {
  let component: TextToggleComponentComponent;
  let fixture: ComponentFixture<TextToggleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToggleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToggleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
