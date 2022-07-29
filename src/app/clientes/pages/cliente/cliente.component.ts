import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  cliente!: Cliente;

  formCliente: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  desabilitar: boolean = true;
  naoEncontrado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let idCliente = parseInt(params.get('idCliente') ?? '0');
      this.recuperarCliente(idCliente);
    });
  }

  recuperarCliente(id: number): void {
    this.clienteService.getClientesById(id).subscribe((client) => {
      this.cliente = client;
      this.formCliente.setValue({
        nome: this.cliente.nome,
        email: this.cliente.email,
      });
      this.valorMudou();
    }, 
    (erro: HttpErrorResponse)=>{
      this.naoEncontrado = erro.status ==404
    }
    );
  }

  valorMudou(){
    this.formCliente.valueChanges.subscribe(
      (valores)=>{
        this.desabilitar = this.formCliente.invalid || !(valores.nome != this.cliente.nome || valores.email != this.cliente.email)
      }
    )
  }
}
