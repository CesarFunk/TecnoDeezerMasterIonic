import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DeezerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DeezerService {
  public deezerAPI: string;

  constructor(public http: Http) {
    //this.deezerAPI = "https://api.deezer.com/";
    this.deezerAPI = "/deezerAPI/";
  }
  //sirve para traer los ID de usuario
  getProfiles() {
    return this.http.get('https://api.myjson.com/bins/mcjrb')
      .map(res => res.json());
    //.subscribe(users => {console.log(users);
    //users.map(userID => {

    //this.getUserDetail(userID);
    //  });

    //});
  }
  //Sirve para traer usuarios
  getUserDetail(userID) {
    return this.http.get(this.deezerAPI + 'user/' + userID)
      .map(res => res.json());
    // .subscribe(data => {console.log(data);
    //});
  }
  //sirve para traer las listas de playlists de los usuarios jalando el ID
  getUserPlaylists(userID) {
    return this.http.get(this.deezerAPI + 'user/' + userID + "/playlists")
      .map(res => res.json());
  }
//devolvera todas las musicas de una playlist en especifico
getPlaylistSongs(playlistID){
  return this.http.get(this.deezerAPI + 'playlist/' + playlistID + "/tracks")
      .map(res => res.json());
}

}
