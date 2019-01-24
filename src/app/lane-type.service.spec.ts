import { TestBed } from '@angular/core/testing';

import { LaneTypeService } from './lane-type.service';

describe('LaneTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaneTypeService = TestBed.get(LaneTypeService);
    expect(service).toBeTruthy();
  });
});
