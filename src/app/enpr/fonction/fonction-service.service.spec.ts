import { TestBed } from '@angular/core/testing';

import { FonctionServiceService } from './fonction-service.service';

describe('FonctionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FonctionServiceService = TestBed.get(FonctionServiceService);
    expect(service).toBeTruthy();
  });
});
