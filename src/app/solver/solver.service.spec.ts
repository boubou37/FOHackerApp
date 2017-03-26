import { TestBed, inject } from '@angular/core/testing';

import { SolverService } from './solver.service';

describe('SolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolverService]
    });
  });

  it('should ...', inject([SolverService], (service: SolverService) => {
    expect(service).toBeTruthy();
  }));

  it('WHEN words of same length AND 1+ matches, THEN find common occurrences', inject([SolverService], (service: SolverService) => {
    expect(service.countMatches('BEAR','BURR')).toEqual(2);
  }));

  it('WHEN words of different length THEN none found', inject([SolverService], (service: SolverService) => {
    expect(service.countMatches('BEARS','BURR')).toEqual(0);
  }));

});
