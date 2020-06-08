import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-manutencao',
  templateUrl: './mat-manutencao.component.html',
  styleUrls: ['./mat-manutencao.component.css']
})
export class MatManutencaoComponent implements OnInit {

  name = 'Angular 5';
  availableTargets = [{ id: 1, name: "Target 1" }, { id: 2, name: "Target 2" }, { id: 3, name: "Target 3" }];
  selectedTargets = [];

  public AddTarget(index) {
    this.selectedTargets.push(this.availableTargets[index]);
    this.availableTargets.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
