import { SpottitudePage } from './app.po';

describe('spottitude App', function() {
  let page: SpottitudePage;

  beforeEach(() => {
    page = new SpottitudePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
