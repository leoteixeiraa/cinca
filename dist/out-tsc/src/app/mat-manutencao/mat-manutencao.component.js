import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MatManutencaoComponent = class MatManutencaoComponent {
    constructor() {
        this.name = 'Angular 5';
        this.availableTargets = [{ id: 1, name: "Target 1" }, { id: 2, name: "Target 2" }, { id: 3, name: "Target 3" }];
        this.selectedTargets = [];
    }
    AddTarget(index) {
        this.selectedTargets.push(this.availableTargets[index]);
        this.availableTargets.splice(index, 1);
    }
    ngOnInit() {
    }
};
MatManutencaoComponent = __decorate([
    Component({
        selector: 'app-mat-manutencao',
        templateUrl: './mat-manutencao.component.html',
        styleUrls: ['./mat-manutencao.component.css']
    })
], MatManutencaoComponent);
export { MatManutencaoComponent };
//# sourceMappingURL=mat-manutencao.component.js.map