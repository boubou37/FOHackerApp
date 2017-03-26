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

  it('WHEN words of different length THEN pseudo error (-1) occurs', inject([SolverService], (service: SolverService) => {
    expect(service.countMatches('BEARS','BURR')).toEqual(-1);
  }));


  it('WHEN words of same length AND 0 matches, THEN 0 found but not error', inject([SolverService], (service: SolverService) => {
    expect(service.countMatches('BEAR','CARE')).toEqual(0);
  }));

  it('WHEN given a list of same sized words AND at least 1 matching char THEN keep possible choices after guessing', inject([SolverService], (service: SolverService) => {
    const words: string[] = [
      'CAPE',
      'CANE',
      'CURL',
      'CALL'
    ];
    const result: string[] = service.keepCandidates(words,'CARE',3);
    const expected: string[] = [
      'CAPE',
      'CANE'
    ];
    expect(expected).toEqual(result);
  }));

  it('WHEN given a list of same sized words AND 0 match THEN keep possible choices after guessing', inject([SolverService], (service: SolverService) => {
    const words: string[] = [
      'CAPE',
      'CANE',
      'CURL',
      'CALL',
      'BORN'
    ];
    const result: string[] = service.keepCandidates(words,'BOOT',0);
    const expected: string[] = [
      'CAPE',
      'CANE',
      'CURL',
      'CALL'
    ];
    expect(expected).toEqual(result);
  }));

  it('WHEN given a list of different sized words AND at least 1 matching char THEN keep possible choices after guessing AND size of guess precedes number of common occurence', inject([SolverService], (service: SolverService) => {
    const words: string[] = [
      'CAPE',
      'CANE',
      'CURL',
      'CALL',
      'CANES' //we dont want this one even though the number of match is same
    ];
    const result: string[] = service.keepCandidates(words,'CARE',3);
    const expected: string[] = [
      'CAPE',
      'CANE'
    ];
    expect(expected).toEqual(result);
  }));


  it('WHEN given a list of different sized words AND 0 matching char THEN keep possible choices after guessing AND size of guess preeces number of common occurrence', inject([SolverService], (service: SolverService) => {
    const words: string[] = [
      'CAPE',
      'CANE',
      'CURL',
      'BOAT',
      'MINT',
      'CALL',
      'BINGE' //we dont want this one even though the number of match is same
    ];
    const result: string[] = service.keepCandidates(words,'CARE',0);
    const expected: string[] = [
      'BOAT',
      'MINT'
    ];
    expect(expected).toEqual(result);
  }));


});
