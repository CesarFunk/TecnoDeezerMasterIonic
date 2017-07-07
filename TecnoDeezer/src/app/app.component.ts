import { Component, ViewChild } from '@angular/core';
import { Platform , Nav} from 'ionic-angular';
//se agregan por separados porque con ionic 3 se instalan individualmente
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Se agregaron paginas con sus componentes typescript son clases
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage }from '../pages/perfiles/perfiles';
import { ContactoPage }from '../pages/contacto/contacto';
import{ AcercaPage }from '../pages/acerca/acerca';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //Esta variable permite llamar el nombre #NAV del lado
  //de vista html 
@ViewChild('NAV') nav: Nav;
 //Se creo una variable tipo areglo para paginas
public pages: Array<{titulo: string, component: any, icon: string}>;
//Se asigno una variable root se creo en pocas palabras
//permite cualquier valor
public rootPage:any;

 constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  //Aqui se asigno valor a la variable root
  this.rootPage = InicioPage;
  //Se asigno valor a la variable pages
   this.pages = [
       {titulo: 'Inicio', component: InicioPage , icon:'home'},
       {titulo: 'Perfiles Deezer', component: PerfilesPage , icon:'person'},
       {titulo: 'Contacto', component: ContactoPage , icon:'mail'},
       {titulo: 'Acerca de', component: AcercaPage , icon:'information-circle'}
 
   ];
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
//Despues del constructor van las funciones personalizadas de javascript y typescript
//que uno crea

//Funcion para navegar cuando den click en la pagina, es decir en los botones del menu
goToPage(page)
{
  this.nav.setRoot(page);
}

}

