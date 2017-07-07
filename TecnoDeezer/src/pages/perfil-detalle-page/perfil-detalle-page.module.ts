import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilDetallePage } from './perfil-detalle-page';

@NgModule({
  declarations: [
    PerfilDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilDetallePage),
  ],
  exports: [
    PerfilDetallePage
  ]
})
export class PerfilDetallePageModule {}
