import { Component, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { HostDirective } from './host.directive';

@Component({
  selector: 'app-wrapper',
  template: `<ng-template #host></ng-template>
  <div>{{obj.weight}}</div>`,
})
export class WrapperComponent {
  @Input() obj: any;
  @ViewChild('host', { static: true }) hostEle: ViewContainerRef;
}
