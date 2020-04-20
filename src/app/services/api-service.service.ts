import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'; //biblioteca via comando

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  server: string = "http://cinca-back-com-br.umbler.net/apiAngular/";

  constructor(private http: HttpClient) { }

  Api(dados: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':
          'application/json'
      })
    };
    const url = this.server + api;
    return this.http.post(url, JSON.stringify(dados),
      httpOptions).map(res => res);
  }
}
