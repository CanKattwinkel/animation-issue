import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { FooComponent } from './foo.component';

@NgModule({
  imports: [
    CommonModule,
    FooRoutingModule
  ],
  declarations: [FooComponent]
})
export class FooModule { }
