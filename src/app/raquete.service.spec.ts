import { TestBed } from '@angular/core/testing';

import { RaqueteService } from './raquete.service';

describe('RaqueteService', () => {
  let service: RaqueteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaqueteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
