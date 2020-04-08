import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaJuridicaComponent } from './pessoa-juridica.component';

describe('PessoaJuridicaComponent', () => {
  let component: PessoaJuridicaComponent;
  let fixture: ComponentFixture<PessoaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
