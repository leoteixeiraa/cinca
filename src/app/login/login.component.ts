
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

  phoneMask = [ /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]; 
  constructor(
    private provider: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(usu: string, sen: string) {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'login',
        login: usu,
        senha: sen
      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
        if (data['success']) {
          this.router.navigate(['/mandato']);
        } else {
          alert('Dados icorretos!!');
        }
      });
    });
  }

}
