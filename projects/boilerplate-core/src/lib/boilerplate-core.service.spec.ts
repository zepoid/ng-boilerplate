import { TestBed, inject } from '@angular/core/testing';

import { BoilerplateCoreService } from './boilerplate-core.service';

describe('BoilerplateCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoilerplateCoreService]
    });
  });

  it('should be created', inject([BoilerplateCoreService], (service: BoilerplateCoreService) => {
    expect(service).toBeTruthy();
  }));
});
