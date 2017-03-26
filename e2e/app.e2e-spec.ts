import { FOHackerAppPage } from './app.po';

describe('fohacker-app App', () => {
  let page: FOHackerAppPage;

  beforeEach(() => {
    page = new FOHackerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
