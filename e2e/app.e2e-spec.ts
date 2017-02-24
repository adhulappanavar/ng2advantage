import { Ng2advantagePage } from './app.po';

describe('ng2advantage App', function() {
  let page: Ng2advantagePage;

  beforeEach(() => {
    page = new Ng2advantagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
