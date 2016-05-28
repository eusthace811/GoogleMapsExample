import { Component } from '@angular/core';

import {MapsAPILoader, NoOpMapsAPILoader, MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import * as mapTypes from 'angular2-google-maps/services/google-maps-types';

import {StyledMap} from './styled-map.directive'

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
	icon?: string;
}

@Component({
  moduleId: module.id,
  selector: 'google-maps-example-app',
  templateUrl: 'google-maps-example.component.html',
  styleUrls: ['google-maps-example.component.css'],
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, StyledMap],
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class GoogleMapsExampleAppComponent {
  title = 'google-maps-example works!';

  zoom: number = 15;

	lat: number = -37.7863713;
    lng: number = 175.2796333;

	constructor() {
	}

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

	markers: marker[] = [
		{
		  lat: -37.7863713,
		  lng: 175.2796333,
		  draggable: false
		},
		{
		  lat: -37.8253519,
		  lng: 175.30493468,
		  draggable: false
		}
	];
}
