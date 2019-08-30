import { TestBed } from '@angular/core/testing';

import { RelgchartService } from './relgchart.service';

describe('RelgchartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelgchartService = TestBed.get(RelgchartService);
    expect(service).toBeTruthy();
  });
});
