import { Directive } from '@angular/core';

import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

@Directive({
  selector: 'styled-map'
})
export class StyledMap {

  constructor(private _wrapper: GoogleMapsAPIWrapper) {

    this._wrapper.getMap().then((m) => {
      var options = { minZoom: 14, maxZoom: 15, 
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
        disableDoubleClickZoom: true,
        panControl: false,
        scaleControl: false,
        styles:[
          {
            stylers: [
                { saturation: -100 }
            ]
          },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
          },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
          },{
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
          }
        ]
      };
      m.setOptions(options);
    });
  }
}