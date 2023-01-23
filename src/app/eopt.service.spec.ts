import { TestBed } from '@angular/core/testing';

import { EOPTService } from './eopt.service';

describe('EOPTServiceService', () => {
  let service: EOPTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EOPTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
