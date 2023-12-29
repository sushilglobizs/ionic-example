import { TestBed } from '@angular/core/testing';

import { Book2Service } from './book2.service';

describe('Book2Service', () => {
  let service: Book2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Book2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
