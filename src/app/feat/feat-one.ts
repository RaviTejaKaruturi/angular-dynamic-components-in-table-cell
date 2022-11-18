import { Component, Input } from '@angular/core';

@Component({
  selector: 'feat-one',
  template: `
  <table-basic-example [data]="data"></table-basic-example>
  `,
})
export class FeatOneComponent {
  data = ELEMENT_DATA;
}

@Component({
  selector: 'dynamic-one',
  template: `
  <button [satPopoverAnchor]='popover' (click)="popover.toggle()">{{data.name}}</button>

  <sat-popover #popover horizontalAlign="after" verticalAlign="above">
  <button>xyz</button>
  <span (click) ="hello($event)" 
  style="padding-left: 10px; cursor:pointer">&#8942;</span>
  </sat-popover>
  `,
})
export class FeatDynamicComponent {
  @Input() data: any;
  hello(eve: any) {
    alert(this.data.name);
  }
}

@Component({
  selector: 'dynamic-two',
  template: `
  <button (click)="hello($event)">{{data.name}}</button>
  `,
})
export class FeatDynamic2Component {
  @Input() data: any;
  hello(eve: any) {
    alert(this.data.name);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: any;
  symbol: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: { component: FeatDynamicComponent },
    symbol: 'Li',
  },
  {
    position: 2,
    name: 'Helium',
    weight: { component: FeatDynamic2Component },
    symbol: 'Li',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: { component: FeatDynamicComponent },
    symbol: 'Li',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: { component: FeatDynamic2Component },
    symbol: 'Be',
  },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
