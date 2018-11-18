import { TestBed } from '@angular/core/testing';

import { SidebarAccessService } from './sidebar-access.service';

describe('SidebarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarAccessService = TestBed.get(SidebarAccessService);
    expect(service).toBeTruthy();
  });
});
