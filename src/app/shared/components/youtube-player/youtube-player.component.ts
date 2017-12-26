import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from '../../../core/services/youtube.service'

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  @Input()
  id: string;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
  }

}
