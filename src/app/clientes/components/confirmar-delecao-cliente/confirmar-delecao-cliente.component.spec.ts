import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarDelecaoClienteComponent } from './confirmar-delecao-cliente.component';

describe('ConfirmarDelecaoClienteComponent', () => {
  let component: ConfirmarDelecaoClienteComponent;
  let fixture: ComponentFixture<ConfirmarDelecaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarDelecaoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarDelecaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
