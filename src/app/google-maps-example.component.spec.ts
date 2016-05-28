import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GoogleMapsExampleAppComponent } from '../app/google-maps-example.component';

beforeEachProviders(() => [GoogleMapsExampleAppComponent]);

describe('App: GoogleMapsExample', () => {
  it('should create the app',
      inject([GoogleMapsExampleAppComponent], (app: GoogleMapsExampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'google-maps-example works!\'',
      inject([GoogleMapsExampleAppComponent], (app: GoogleMapsExampleAppComponent) => {
    expect(app.title).toEqual('google-maps-example works!');
  }));
});
