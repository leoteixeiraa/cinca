import { async, TestBed } from '@angular/core/testing';
import { PessoaFisicaComponent } from './pessoa-fisica.component';
describe('PessoaFisicaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PessoaFisicaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PessoaFisicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pessoa-fisica.component.spec.js.map