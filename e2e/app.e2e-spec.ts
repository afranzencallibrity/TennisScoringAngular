import { TennisScoringAngularPage } from './app.po';

describe('tennis-scoring-angular App', () => {
  let page: TennisScoringAngularPage;

  beforeEach(() => {
    page = new TennisScoringAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
