import { LiveChannelPage } from './app.po';

describe('live-channel App', () => {
  let page: LiveChannelPage;

  beforeEach(() => {
    page = new LiveChannelPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
