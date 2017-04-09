import { DagsPage } from './app.po';

describe('dags App', () => {
  let page: DagsPage;

  beforeEach(() => {
    page = new DagsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
