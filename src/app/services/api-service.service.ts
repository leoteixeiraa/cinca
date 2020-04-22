import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  caminho = 'http://cinca-back-com-br.umbler.net/';
  //caminho = 'http://hospedarangular-com-br.umbler.net/';
  constructor(private http: HttpClient) { }

  Api(dados: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.caminho + api;
    return this.http.post(url, JSON.stringify(dados), httpOptions).map(res => res);
  }
}

