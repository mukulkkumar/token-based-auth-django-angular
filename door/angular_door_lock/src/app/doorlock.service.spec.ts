import { TestBed, inject } from '@angular/core/testing';

import { DoorlockService } from './doorlock.service';

describe('DoorlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoorlockService]
    });
  });

  it('should be created', inject([DoorlockService], (service: DoorlockService) => {
    expect(service).toBeTruthy();
  }));
});
