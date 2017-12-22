import { TestBed, inject } from '@angular/core/testing';

import { LiveChannelService } from './live-channel.service';

describe('LiveChannelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveChannelService]
    });
  });

  it('should be created', inject([LiveChannelService], (service: LiveChannelService) => {
    expect(service).toBeTruthy();
  }));
});
