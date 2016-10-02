import { Angular2HelloWorld2Page } from './app.po';

describe('angular2-hello-world2 App', function() {
  let page: Angular2HelloWorld2Page;

  beforeEach(() => {
    page = new Angular2HelloWorld2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
