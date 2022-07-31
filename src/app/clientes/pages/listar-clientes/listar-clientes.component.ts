import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmarDelecaoClienteComponent } from '../../components/confirmar-delecao-cliente/confirmar-delecao-cliente.component';
import { FormClienteComponent } from '../../components/form-cliente/form-cliente.component';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  colunas: Array<String> = ['id', 'nome', 'email', 'actions'];

  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.clienteService.atualizarClienteSub$.subscribe((precisaAtualizar) => {
      if (precisaAtualizar) {
        this.recuperarClientes();
      }
    });
  }

  recuperarClientes(): void {
    this.clienteService.getClientes().subscribe(
      (clienteList) => {
        this.clientes = clienteList.reverse();
      },
      (erro) => {
        console.log(erro);
      },
      () => {
        console.log('Dados enviados com sucesso');
      }
    );
  }

  deletarCliente(client: Cliente): void {
    const dialogRef = this.dialog.open(ConfirmarDelecaoClienteComponent);

    dialogRef.afterClosed().subscribe((sucesso) => {
      if (sucesso) {
        this.clienteService.deleteCliente(client).subscribe(
          () => {
            this.snackbar.open('Cliente deletado', 'Ok', {
              duration: 3000,
            });
            this.recuperarClientes;
          },
          (error) => {
            this.snackbar.open('Não foi possível deletar o cliente', 'Ok', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }

  abrirFormCliente(): void {
    const dialogRef = this.dialog.open(FormClienteComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.recuperarClientes();
    });
  }
}
