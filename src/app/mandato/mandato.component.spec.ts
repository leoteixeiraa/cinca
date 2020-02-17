import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoComponent } from './mandato.component';

describe('MandatoComponent', () => {
  let component: MandatoComponent;
  let fixture: ComponentFixture<MandatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
