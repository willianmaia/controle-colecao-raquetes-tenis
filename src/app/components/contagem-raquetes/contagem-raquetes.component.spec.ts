import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContagemRaquetesComponent } from './contagem-raquetes.component';

describe('ContagemRaquetesComponent', () => {
  let component: ContagemRaquetesComponent;
  let fixture: ComponentFixture<ContagemRaquetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContagemRaquetesComponent]
    });
    fixture = TestBed.createComponent(ContagemRaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
