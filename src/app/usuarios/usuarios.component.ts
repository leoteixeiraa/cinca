import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;
  nome = '';
  login = '';
  senha = '';
  idUser = '';
  title = 'Inserir Usuário ao sistema';
  textoBuscar = '';

  constructor(
    private provider: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lista = [];
    this.start = 0;
    this.carregar(this.textoBuscar);
  }


  carregar(texto: string) {
    this.lista = [];
    this.start = 0;
    return new Promise(resolve => {
      const dados = {
        requisicao: 'listar',
        limit: this.limit,
        start: this.start,
        textoBuscar: texto
      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
        for (const dado2 of data['result']) {
          this.lista.push(dado2);
        }
        resolve(true);
      });
    });
  }

  cadastrar() {
    if (this.login !== '' && this.senha !== '') {
      return new Promise(resolve => {
        const dados = {
          requisicao: 'add',
          nome: this.nome,
          login: this.login,
          senha: this.senha
        };
        this.provider.Api(dados, 'apiUsuarios.php')
          .subscribe(data => {

            if (data['success']) {
              alert('Salvo com sucesso!!');
              window.location.href = "usuarios";
            } else {
              alert('Erro ao Salvar!!');
            }

          });
      });
    } else {
      alert('Prencha os Campos!');
    }
  }

  dadosEditar(nome: string, login: string, senha: string, idUser: string) {
    this.title = 'Editar Usuário';
    this.nome = nome;
    this.login = login;
    this.senha = senha;
    this.idUser = idUser;
  }

  editar() {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'editar',
        nome: this.nome,
        login: this.login,
        senha: this.senha,
        idUser: this.idUser
      };
      this.provider.Api(dados, 'apiUsuarios.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Editado com sucesso!!');
            this.router.navigate(['/usuarios']);
          } else {
            alert('Erro ao Editar!!');
          }

        });
    });

  }

  excluir(idu: string) {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'excluir',
        idUser: idu
      };
      this.provider.Api(dados, 'apiUsuarios.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Excluido com sucesso!');

            window.location.href = "usuarios";
          } else {
            alert('Erro ao Excluir!!');
          }

        });
    });
  }

}
