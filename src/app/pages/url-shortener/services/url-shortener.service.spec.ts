import { TestBed } from '@angular/core/testing';

import { UrlShortenerService } from './url-shortener.service';

describe('UrlShortenerService', () => {
  let service: UrlShortenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlShortenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
