import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'; //biblioteca via comando
let ApiServiceService = class ApiServiceService {
    constructor(http) {
        this.http = http;
        this.server = "http://localhost/apiAngular";
    }
    Api(dados, api) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const url = this.server + api;
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