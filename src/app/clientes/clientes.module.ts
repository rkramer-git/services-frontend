import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { ConfirmarDelecaoClienteComponent } from './components/confirmar-delecao-cliente/confirmar-delecao-cliente.component';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    ListarClientesComponent,
    ConfirmarDelecaoClienteComponent,
    FormClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NavbarModule
  ]
})
export class ClientesModule { }
