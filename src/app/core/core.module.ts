import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from './services/youtube.service';
import { LiveChannelService } from './services/live-channel.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    YoutubeService,
    LiveChannelService
  ]
})
export class CoreModule { }
