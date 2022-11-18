import { Component, Input } from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  @Input() data: any; 
  dataSource: any;
  displayedColumns: string[] = [
    'position',
    'name', 'weight', //'symbol'
  ];

  ngOnInit() {
    this.dataSource = this.data;
  }

}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
