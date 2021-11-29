import { TestBed } from '@angular/core/testing';

import { DelijnService } from './delijn.service';

describe('DelijnService', () => {
  let service: DelijnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelijnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
