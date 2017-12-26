import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeService {
  /**
   * Builds the service
   */
  constructor() {
    console.log('test !!!!!!!!');
    const node = document.createElement('script');
    node.type = 'text/javascript';
    node.src = 'https://www.youtube.com/iframe_api';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
