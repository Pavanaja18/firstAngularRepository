import { TestBed } from '@angular/core/testing';

import { FaketestService } from './faketest.service';

describe('FaketestService', () => {
  let service: FaketestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaketestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
