import { TestBed } from '@angular/core/testing';

import { PageDesktopService } from './page-desktop.service';

describe('PageDesktopService', () => {
  let service: PageDesktopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDesktopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
