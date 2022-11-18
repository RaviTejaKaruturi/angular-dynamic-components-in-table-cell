import {NgModule} from '@angular/core';
import {DemoMaterialModule} from '../material-module';
import {TableBasicExample} from './table-basic-example';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [DemoMaterialModule],
  entryComponents: [],
  providers: [],
  declarations: [TableBasicExample],
  exports:[TableBasicExample],
})
export class TableModule {}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */