import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';

const routes: Routes = [
  {
    path: '',
    component:ListarClientesComponent,
    children:[
      {
        path:':idCliente',
        component:ClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
