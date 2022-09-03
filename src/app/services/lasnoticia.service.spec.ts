import { TestBed } from '@angular/core/testing';

import { LasnoticiaService } from './lasnoticia.service';

describe('LasnoticiaService', () => {
  let service: LasnoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LasnoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
