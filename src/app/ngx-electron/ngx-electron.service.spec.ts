import { TestBed, inject } from '@angular/core/testing';

import { NgxElectronService } from './ngx-electron.service';

describe('NgxElectronService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxElectronService]
    });
  });

  it('should ...', inject([NgxElectronService], (service: NgxElectronService) => {
    expect(service).toBeTruthy();
  }));
});
