import { TestBed } from '@angular/core/testing';

import { TestingLibService } from './testing-lib.service';

describe('TestingLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestingLibService = TestBed.get(TestingLibService);
    expect(service).toBeTruthy();
  });
});
