import { LifecyclehooksPage } from './app.po';

describe('lifecyclehooks App', function() {
  let page: LifecyclehooksPage;

  beforeEach(() => {
    page = new LifecyclehooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
