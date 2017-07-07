import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,PopoverController } from 'ionic-angular';
//importamos nuestro servicio
import { DeezerService } from '../../providers/deezer-service'
import{ CancionPopover } from '../cancion-popover/cancion-popover';

/**
 * Generated class for the CancionesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-canciones-page',
  templateUrl: 'canciones-page.html',
  //aqui ponemos nuestro servicio
  providers: [DeezerService]
})
export class CancionesPage {
  //creamos una variable tipo any[cualquiera] nos sirve para los ID de la playlists
  public playlist: any;
  //creamos una variable tipo any[cualquiera] nos servira para guardar las musicas temporalmente
  //hablando en terminos de variable
  public songs: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerService,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController

  ) {
    //dentro del constructos declaramos la variable donde sera tipo parametros de navegador "navParams"
    //esto nos sirve para enviar datos de una pagina a otra como pasar de un textbox a otro que se encuentra en una pagina a otra.
    this.playlist = this.navParams.get('playlist');
    //este solo era para mostrar en la consola. 
    //console.log(this.playlist);
    //variable tipo areglo
    this.songs = [];
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    // console.log('ionViewDidLoad CancionesPage');
    this.ds.getPlaylistSongs(this.playlist.id).subscribe(data => {
      this.songs = data.data;
      loader.dismiss();
    });
  }

  openCancionPopover(event){
    let popover = this.popoverCtrl.create(CancionPopover);
       popover.present({
           ev: event
         });
  }

}
