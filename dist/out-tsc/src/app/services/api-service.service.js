import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
let ApiServiceService = class ApiServiceService {
    //caminho = 'http://hospedarangular-com-br.umbler.net/';
    constructor(http) {
        this.http = http;
        this.reload = true;
        this.caminho = 'http://cinca-back-com-br.umbler.net/';
    }
    Api(dados, api) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        const url = this.caminho + api;
        return this.http.post(url, JSON.stringify(dados), httpOptions).map(res => res);
    }
};
ApiServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiServiceService);
export { ApiServiceService };
//# sourceMappingURL=api-service.service.js.map