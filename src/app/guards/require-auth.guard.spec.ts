import { TestBed, inject } from '@angular/core/testing';

import { RequireAutGuard } from './require-auth.service';

describe('RequireAutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAutGuard]
    });
  });

  it('should be created', inject([RequireAutGuard], (service: RequireAutGuard) => {
    expect(service).toBeTruthy();
  }));
});
