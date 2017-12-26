import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
// import {YoutubePlayerComponent} from '../core/components/youtube-player/youtube-player.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
