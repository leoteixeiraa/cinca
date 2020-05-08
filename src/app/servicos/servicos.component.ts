import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {


  lista: any = [];
  limit = 10;
  start = 0;

  idServico = '';
  cod_lcin = '';
  unidade = '';
  descricao = '';
  title = 'Inserir Serviço';
  textoBuscar = '';
  caminho = 'apiServicos.php';
  ApiServiceService;

  constructor(private provider: ApiServiceService, private router: Router) { }

  ngOnInit(): void {

  }

}
