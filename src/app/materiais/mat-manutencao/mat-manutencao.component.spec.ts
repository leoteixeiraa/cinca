import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatManutencaoComponent } from './mat-manutencao.component';

describe('MatManutencaoComponent', () => {
  let component: MatManutencaoComponent;
  let fixture: ComponentFixture<MatManutencaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatManutencaoComponent ]
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
