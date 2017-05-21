import { AngularElectronSeedPage } from './app.po';

describe('angular-electron-seed App', () => {
  let page: AngularElectronSeedPage;

  beforeEach(() => {
    page = new AngularElectronSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
