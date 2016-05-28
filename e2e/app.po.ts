export class GoogleMapsExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('google-maps-example-app h1')).getText();
  }
}
