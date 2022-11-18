import {
  Component,
  ViewContainerRef,
  ViewChild,
  Input,
  OnInit,
  ComponentFactoryResolver,
} from '@angular/core';
import { HostDirective } from './host.directive';

@Component({
  selector: 'app-wrapper',
  template: `<ng-template #host></ng-template>`,
})
export class WrapperComponent implements OnInit {
  @Input() comp: any;
  @Input() obj: any;
  @ViewChild('host', { static: true, read: ViewContainerRef })
  hostEle: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    console.log('hello', this.obj.weight.component);
    const componentFactory = this.resolver.resolveComponentFactory(this.comp);

    const viewContainerRef = this.hostEle;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = this.obj;
  }
}
