import { Component, OnInit } from '@angular/core';
import { LiveChannelService } from '../core/services/live-channel.service';
import { Channel } from '../core/models/channel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   * List of channel
   * @type {Array}
   */
  channels: Array<Channel> = [];

  /**
   * Build the component and inject services if needed
   * @param liveChannel
   */
  constructor(private liveChannel: LiveChannelService) {}

  ngOnInit() {
    this.liveChannel.getChannels()
      .then(res => {
        this.channels = res;
      })
      .catch(e => console.log(e));
  }
}
