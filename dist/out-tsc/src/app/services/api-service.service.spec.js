import { TestBed } from '@angular/core/testing';
import { ApiServiceService } from './api-service.service';
describe('ApiServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ApiServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=api-service.service.spec.js.map