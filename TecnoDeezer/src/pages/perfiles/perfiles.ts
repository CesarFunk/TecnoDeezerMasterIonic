import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PlaylistsPage } from '../playlists-page/playlists-page';
//importamos nuestro servicio
import { DeezerService } from '../../providers/deezer-service'
//se agrega observable
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';

@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  //aqui ponemos nuestro servicio
  providers: [DeezerService]
})

export class PerfilesPage {
  //variable que usaremos para mapear en el servicio de un metodo se encuentra abajo del codigo
  public users: any;
  //para usar un loading
  public loader: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerService,
    public loadingCtrl: LoadingController
  ) {
    //indicamos a la variable que hemos creado en el constructos
    //que sera tipo areglo
    this.users = [];
    this.loader = this.loadingCtrl.create();
    this.loader.present();
  }


  //metodo para traer lista por ID del usuario pero
  //este metodo obtiene el ID de la pagina donde se ha ingresado
  //es decir es variable de navegacion donde pasamos valores por la navegabilidad.
  //mandamos todos los datos del usuario.
  //este metodo lo usamos en el lado de la vista perfiles.html
  goToPlaylist(user) {
    this.navCtrl.push(PlaylistsPage, { user: user });
  }

  //Aqui ponemos el servicio parecido al Oninit
  ionViewDidLoad() {
    this.loader.present();
    // this.loader.dismiss();
    //metodo para obtener los usuarios este metodo se encuentra en
    //carpeta providers con el deezer service ts typescript
    this.ds.getProfiles().subscribe(usersID => {
      //se mapea para meter un metodo dentro de corchetes
      //  usersID.map(userID => {
      //se llama siempre el servicio con "this" y luego el nombre del servicio
      //para ingresar al metodo
      // this.ds.getUserDetail(userID).subscribe(user => {
      //con this.users.push insertamos los usuarios
      //users es una variable que creamos al principio de la clase 
      //es de valor any y en el constructor se le dice que sera un areglo
      //en el constructos se ponen las variables que usaremos en la clase
      //  this.users.push(user);
      //  });
      //  });
      let sources = usersID.map(userID => this.ds.getUserDetail(userID));
      //en observable da error en typescript
      // Observable.merge(sources).subscribe(
      //solucion se agregan puntos en source
      Observable.merge(...sources).subscribe(
        data => this.users.push(data),
        error => console.log(error),
        () => this.loader.dismiss()
      );
    });
    // console.log('ionViewDidLoad Perfiles');
  }

}
