import { TestBed } from '@angular/core/testing';

import { ProdctDetailGuard } from './prodct-detail.guard';

describe('ProdctDetailGuard', () => {
  let guard: ProdctDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProdctDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
