import { TestBed } from '@angular/core/testing';

import { NgChalkService } from './ng-chalk.service';

describe('NgChalkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgChalkService = TestBed.get(NgChalkService);
    expect(service).toBeTruthy();
  });
});
