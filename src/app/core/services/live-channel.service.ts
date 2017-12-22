import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Channel } from '../models/channel';

@Injectable()
export class LiveChannelService {
  /**
   * LiveChannelService API Endpoint with Version
   * @type {string}
   */
  URI = `${environment.apiEndpoint}/api/v1`;

  /**
   * Create the Service
   * @param http
   */
  constructor(private http: Http) {
  }

  /**
   * Get all the channels available
   * @returns {Promise<T>}
   */
  getChannels() {
    return this.promiseGetRequest(this.URI + `/ci/channels/list`, {})
      .then(res => {
        return res.map(r => new Channel(r));
      });
  }

  /**
   * Helper to make get requests. Adds Pipeline creds if supplied.
   * @param url
   * @param params
   * @returns {Promise<HttpRequest>}
   */
  promiseGetRequest(url, params = {}) {
    // Create Request Options Object
    const reqOptions = this.generateReqOptions(params);

    // Make Call
    return this.http.get(url, reqOptions).map(r => r.json()).toPromise();
  }

  /**
   * Generate common headers and params.
   * @param params
   * @returns {RequestOptions}
   */
  generateReqOptions(params) {
    const reqOptions = new RequestOptions();
    reqOptions.headers = reqOptions.headers || new Headers();

    // add query params
    reqOptions.search = reqOptions.search || new URLSearchParams();
    Object.keys(params).forEach(k => reqOptions.search.append(k, params[k]));

    return reqOptions;
  }
}
