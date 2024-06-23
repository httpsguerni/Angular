import { TestBed } from '@angular/core/testing';

import { SenacService } from './senac.service';

describe('SenacService', () => {
  let service: SenacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
