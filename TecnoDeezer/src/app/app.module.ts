import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//se agregaron con ionic 3
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//todas las pages de nuestra aplicacion
import { MyApp } from './app.component';
import{InicioPage}from '../pages/inicio/inicio';
import { PerfilesPage }from '../pages/perfiles/perfiles';
import { ContactoPage }from '../pages/contacto/contacto';
import{ AcercaPage }from '../pages/acerca/acerca';
import {PlaylistsPage} from '../pages/playlists-page/playlists-page';
import {CancionesPage} from '../pages/canciones-page/canciones-page';
import {PerfilDetallePage} from '../pages/perfil-detalle-page/perfil-detalle-page';
import {CancionPopover} from '../pages/cancion-popover/cancion-popover';
//Se agregara un componente personalizado repodructor personalizado
import{TecnoPlayer} from '../components/tecno-player/tecno-player';
//se tiene que agregar para que funcionen los servicios
import{ HttpModule } from '@angular/http';
//importamos el servicio global
//import{DeezerService}from '../providers/deezer-service';

@NgModule({
  //declaramos los componentes
  declarations: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage,
    PlaylistsPage,
    CancionesPage,
    TecnoPlayer,
    PerfilDetallePage,
    CancionPopover
  ],
  imports: [
    BrowserModule,
    //aqui se agrega la referencia para servicios el typescript
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //aqui se agregan los componentes
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage,
    PlaylistsPage,
    CancionesPage,
    TecnoPlayer,
    PerfilDetallePage,
    CancionPopover
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
