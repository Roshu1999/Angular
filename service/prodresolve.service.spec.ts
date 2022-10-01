import { TestBed } from '@angular/core/testing';

import { ProdresolveService } from './prodresolve.service';

describe('ProdresolveService', () => {
  let service: ProdresolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdresolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
