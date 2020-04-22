import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';
  caminho = 'apiUsuarios.php';
  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private provider: ApiServiceService, private router: Router) { }

  ngOnInit(): void {

  }


  login(usuario: string, senha: string) {

    return new Promise(resolve => {
      const dados = {
        requisicao: 'login',

        usuario: this.usuario,
        senha: this.senha
      };
      this.provider.Api(dados, this.caminho)
        .subscribe(data => {

          if (data['success']) {

            this.router.navigate(['/pessoa-fisica']);
          } else {
            alert('Dados Incorretos!!');
          }

        });
    });
  }


}
