import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-manutencao',
  templateUrl: './mat-manutencao.component.html',
  styleUrls: ['./mat-manutencao.component.css']
})
export class SelectMultipleExample {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */