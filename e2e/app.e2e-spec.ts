import { WhoviansPage } from './app.po';

describe('whovians App', () => {
  let page: WhoviansPage;

  beforeEach(() => {
    page = new WhoviansPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
