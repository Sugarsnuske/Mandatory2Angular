import { Mandatory2AngularPage } from './app.po';

describe('mandatory2-angular App', function() {
  let page: Mandatory2AngularPage;

  beforeEach(() => {
    page = new Mandatory2AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
