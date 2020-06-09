import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MateriaisComponent = class MateriaisComponent {
    constructor(provider, router, http) {
        this.provider = provider;
        this.router = router;
        this.http = http;
        this.lista = [];
        this.limit = 1000;
        this.start = 0;
        this.idMaterial = '';
        this.cod_lcin = '';
        this.unidade = '';
        this.descricao = '';
        this.quantidade = '';
        this.custoUnit = '';
        this.marca = '';
        this.observacoes = '';
        this.title = 'Inserir Material';
        this.textoBuscar = '';
        this.caminho = 'apiMateriais.php';
        this.marked = 1;
        this.paginaAtual = 1;
        this.matManutencao = null;
        this.matManutencaoCheck = null;
        this.availableTargets = { id: this.descricao };
        this.selectedTargets = [];
    }
    AddTarget(index) {
        this.selectedTargets.push(this.availableTargets[index]);
        this.availableTargets.splice(index, 1);
    }
    ngOnInit() {
        this.lista = [];
        this.start = 0;
        this.carregar(this.textoBuscar);
    }
    // get f() {
    //   return this.myForm.controls;
    // }
    // onFileChange(event) {
    //   const reader = new FileReader();
    //   if (event.target.files && event.target.files.length) {
    //     const [file] = event.target.files;
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //       this.imageSrc = reader.result as string;
    //       this.myForm.patchValue({
    //         fileSource: reader.result
    //       });
    //     };
    //   }
    // }
    toggleVisibility(e) {
        this.marked = e.target.checked;
    }
    onRefresh() {
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        let currentUrl = this.router.url + '?';
        this.router.navigateByUrl(currentUrl)
            .then(() => {
            this.router.navigated = false;
            this.router.navigate([this.router.url]);
        });
    }
    carregar(texto) {
        this.lista = [];
        this.start = 0;
        return new Promise(resolve => {
            const dados = {
                requisicao: 'listar',
                limit: this.limit,
                start: this.start,
                textoBuscar: texto,
            };
            this.provider.Api(dados, this.caminho).subscribe(data => {
                for (const dado of data['result']) {
                    this.lista.push(dado);
                }
                resolve(true);
            });
        });
    }
    cadastrar() {
        var regra = /^[0-9]+$/;
        var regra2 = /^[0-9,.]+$/;
        if (this.cod_lcin.match(regra) && this.custoUnit.match(regra2)) {
            if (this.cod_lcin !== '' && this.descricao !== '' &&
                this.unidade !== '' && this.quantidade !== '' && this.custoUnit !== '') {
                return new Promise(resolve => {
                    const dados = {
                        requisicao: 'add',
                        cod_lcin: this.cod_lcin,
                        descricao: this.descricao,
                        quantidade: this.quantidade,
                        unidade: this.unidade,
                        custoUnit: this.custoUnit,
                        marca: this.marca,
                        matManutencao: this.matManutencao,
                        observacoes: this.observacoes,
                    };
                    this.provider.Api(dados, this.caminho)
                        .subscribe(data => {
                        if (data['success']) {
                            alert('Salvo com sucesso!!');
                            console.log(data);
                        }
                        else {
                            alert('Erro ao Salvar!!');
                        }
                    });
                });
            }
            else {
                alert('Prencha os Campos!');
            }
        }
        else {
            alert("Permitido somente números no COD LCIN! E no campo Custo Unitário apenas numero, ponto e virgula. Verifique.");
        }
    }
    // tslint:disable-next-line: max-line-length
    dadosEditar(cod_lcin, descricao, unidade, quantidade, custoUnit, marca, matManutencao, observacoes, idMaterial) {
        this.title = 'Editar Material';
        this.cod_lcin = cod_lcin;
        this.descricao = descricao;
        this.unidade = unidade;
        this.quantidade = quantidade;
        this.custoUnit = custoUnit;
        this.marca = marca;
        this.matManutencao = matManutencao;
        this.observacoes = observacoes;
        this.idMaterial = idMaterial;
    }
    editar() {
        var regra = /^[0-9]+$/;
        var regra2 = /^[0-9,.]+$/;
        if (this.cod_lcin.match(regra) && this.custoUnit.match(regra2)) {
            return new Promise(resolve => {
                const dados = {
                    requisicao: 'editar',
                    cod_lcin: this.cod_lcin,
                    descricao: this.descricao,
                    unidade: this.unidade,
                    quantidade: this.quantidade,
                    custoUnit: this.custoUnit,
                    marca: this.marca,
                    matManutencao: this.matManutencao,
                    observacoes: this.observacoes,
                    idMaterial: this.idMaterial
                };
                this.provider.Api(dados, this.caminho)
                    .subscribe(data => {
                    if (data['success']) {
                        alert('Editado com sucesso!!');
                    }
                    else {
                        alert('Erro ao Editar!!');
                    }
                });
            });
        }
        else {
            alert("Permitido somente números no COD LCIN! E no campo Custo Unitário apenas numero, ponto e virgula. Verifique."); //se não seguir a primeira regra
        }
    }
    excluir(idu) {
        var agree = confirm("deseja deletar os dados??");
        if (agree) {
            return new Promise(resolve => {
                const dados = {
                    requisicao: 'excluir',
                    idMaterial: idu
                };
                this.provider.Api(dados, this.caminho)
                    .subscribe(data => {
                    if (data['success']) {
                        alert('Excluido com sucesso!');
                    }
                    else {
                        alert('Erro ao Excluir!!');
                    }
                });
            });
        }
        else {
            return false;
        }
    }
};
MateriaisComponent = __decorate([
    Component({
        selector: 'app-materiais',
        templateUrl: './materiais.component.html',
        styleUrls: ['./materiais.component.css']
    })
], MateriaisComponent);
export { MateriaisComponent };
//# sourceMappingURL=materiais.component.js.map