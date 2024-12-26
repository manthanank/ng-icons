import { TestBed } from '@angular/core/testing';

import { NgIconsService } from './ng-icons.service';

describe('NgIconsService', () => {
  let service: NgIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
