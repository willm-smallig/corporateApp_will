import { TestBed } from '@angular/core/testing';

import { Geolocation } from './geolocation-service';

describe('Geolocation', () => {
  let service: Geolocation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Geolocation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate distance correctly', () => {
    const distance = service.calcularDistancia(0, 0, 0, 0);
    expect(distance).toBeCloseTo(0);
  });
});