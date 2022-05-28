import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import {  } from '@angular/common/http/testing';

import { TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { MerlinApiService } from './merlin-api.service';

describe('MerlinApiService (with mocked Backend)', () => {
  let service: MerlinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        MerlinApiService]
    });
    service = TestBed.inject(MerlinApiService);
  });

  it('should get at least some settings', inject([MerlinApiService, HttpXhrBackend], () => {
    const service: MerlinApiService = TestBed.get(MerlinApiService)
    let merlinServiceMock = spyOn(service, 'getSettings').withArgs('KEY')
      .and.returnValue(of());

    expect(service).toBeTruthy();
    service.getSettings("KEY").subscribe(r => {
      expect(r).toBeGreaterThan(0);
    });
    expect(service.getSettings).toHaveBeenCalled();
}))});
