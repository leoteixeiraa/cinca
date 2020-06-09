import { async, TestBed } from '@angular/core/testing';
import { MatManutencaoComponent } from './mat-manutencao.component';
describe('MatManutencaoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MatManutencaoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MatManutencaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mat-manutencao.component.spec.js.map