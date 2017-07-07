import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionPopover } from './cancion-popover';

@NgModule({
  declarations: [
    CancionPopover,
  ],
  imports: [
    IonicPageModule.forChild(CancionPopover),
  ],
  exports: [
    CancionPopover
  ]
})
export class CancionPopoverModule {}
