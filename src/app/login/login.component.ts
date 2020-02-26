import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private provider: ApiServiceService) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {

    return new Promise(resolve => {
      const dados = {
        requisicao: 'listar',
        textoBuscar: usuario
      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
        if (data['success']) {
          alert('Login Efetuado!');
          window.location.href = "usuarios";
        } else {
          alert('Dados Incorretos');
        }
        resolve(true);
      });
    });
  }
}
