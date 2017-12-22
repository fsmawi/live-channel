import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePlayerDirective } from './directives/youtube-player.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YoutubePlayerDirective]
})
export class SharedModule { }
