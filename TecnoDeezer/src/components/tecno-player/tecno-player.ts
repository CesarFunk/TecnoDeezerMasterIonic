//se agrego input para usar en nuestro componente de reproductor
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Events} from 'ionic-angular';

/**
 * Generated class for the TecnoPlayer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tecno-player',
  templateUrl: 'tecno-player.html'
})
//toda esta clase de tipo etiqueta esta en canciones page
export class TecnoPlayer implements OnInit, OnDestroy {
  //esta variable la usamos en la input
  //variables para el binding
  @Input() titulo: string;
  @Input() artista: string;
  @Input() album: string;
  @Input() cover: string;
  @Input() audioSrc: string;

  public audio: HTMLAudioElement;
  public ready: boolean;
  public playing: boolean;
  public audioPos: number;
  public audioDuration: number;

  constructor(
    public events: Events
  ) {
    //se inician variables
    this.ready = false;
    this.playing = false;
    this.audioPos = 0;
  }

  ngOnInit() {
    //se crea objeto para dentrar a sus htmlattribute
    this.audio = new Audio();
    this.audio.src = this.audioSrc;
    this.audio.load();
    //funcioon para play
    //y barra de progreso
    this.audio.oncanplaythrough = () => {
      this.ready = true;
      this.audioDuration = this.audio.duration;
    };
    //funcion para actualizar progress
    this.audio.ontimeupdate = (event) => {
      this.audioPos = this.audio.currentTime;
    };
    //funcion cuando finalize barra
    //finaliza audio
    this.audio.onended = () => {
      this.audioPos = 0;
      this.playing = false;
    };

    //evento para volumen
    this.events.subscribe('cambio:volumen', (volumen) =>{
      this.audio.volume = volumen/100;
    });

  }
  //para pausar boton play
  togglePlay() {
    if (!this.playing)
      this.audio.play();
    else
      this.audio.pause();
    this.playing = !this.playing;
  }
  //para destruir eventos
  ngOnDestroy(){
    this.events.unsubscribe('cambio:volumen');
  }

}
