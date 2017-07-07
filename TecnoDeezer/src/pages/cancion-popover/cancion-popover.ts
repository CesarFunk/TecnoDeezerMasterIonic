import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController ,Events} from 'ionic-angular';

/**
 * Generated class for the CancionPopover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cancion-popover',
  templateUrl: 'cancion-popover.html',
})
export class CancionPopover {
  volumen: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public events: Events
    ) {
      this.volumen = 100;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionPopover');
  }
 

onRangeChange(event){
console.log(this.volumen);
this.events.publish('cambio:volumen', this.volumen);
}

 close(){
   this.viewCtrl.dismiss();
 }
}
