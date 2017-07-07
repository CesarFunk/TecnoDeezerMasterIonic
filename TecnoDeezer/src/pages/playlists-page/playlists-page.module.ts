import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaylistsPage } from './playlists-page';

@NgModule({
  declarations: [
    PlaylistsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaylistsPage),
  ],
  exports: [
    PlaylistsPage
  ]
})
export class PlaylistsPageModule {}
