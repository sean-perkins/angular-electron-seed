import { browser, element, by } from 'protractor';

export class AngularElectronSeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('seed-root')).getText();
  }
}
