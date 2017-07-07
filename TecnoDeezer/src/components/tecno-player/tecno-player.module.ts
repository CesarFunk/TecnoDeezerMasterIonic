import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TecnoPlayer } from './tecno-player';

@NgModule({
  declarations: [
    TecnoPlayer,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TecnoPlayer
  ]
})
export class TecnoPlayerModule {}
