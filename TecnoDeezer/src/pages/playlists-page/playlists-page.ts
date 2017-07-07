import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ModalController } from 'ionic-angular';
import { CancionesPage } from '../canciones-page/canciones-page';
import{PerfilDetallePage} from '../perfil-detalle-page/perfil-detalle-page';
//importamos nuestro servicio
import { DeezerService } from '../../providers/deezer-service'



@IonicPage()
@Component({
  selector: 'page-playlists-page',
  templateUrl: 'playlists-page.html',
  //aqui ponemos nuestro servicio
  providers: [DeezerService]
})
export class PlaylistsPage {
  //varianle que se usa para el usuario y su ID
  public user: any;
  //creamos una variable para las playlist
  public playlists: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
    ) {
    //variable para obtener datos de otra pagina que se enviaron
    this.user = this.navParams.get('user');
   // console.log(this.user);
    this.playlists = [];
  }
  //metodo para abrir la pagina de canciones
  goToCanciones(playlist) {
    //aqui abrimos una pagina con metodo push que este metodo lo tiene la "navCtrl" y mandamos dos parametros
    //uno es la pagina el nombre en si, y el otro es el ID del playlist 
    //este playlistsID lo detecta la otra pagina donde hay un metodo en el constructos.
    //la pagina donde se envia es "canciones-page.ts"
    this.navCtrl.push(CancionesPage, { playlist: playlist });
  }

  ionViewDidLoad() {
let loader = this.loadingCtrl.create();
loader.present();
    //usaremos el servicio
    this.ds.getUserPlaylists(this.user.id).subscribe(
      data => { 
      this.playlists =  data.data
      loader.dismiss();
      }
    );
    //   console.log('ionViewDidLoad PlaylistsPage');
  }

  goToPerfilDetalle(user, plalists){
let modal = this.modalCtrl.create(PerfilDetallePage,
{
user: user,
playlists: this.playlists
});
modal.present();
modal.onDidDismiss(data => console.log(data));
  }

}
