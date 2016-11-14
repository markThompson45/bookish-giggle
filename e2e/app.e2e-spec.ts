import { BookishGigglePage } from './app.po';

describe('bookish-giggle App', function() {
  let page: BookishGigglePage;

  beforeEach(() => {
    page = new BookishGigglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
