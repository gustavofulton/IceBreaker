import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsLatLng, Geolocation } from 'ionic-native';
declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public platform: Platform) {
  }

  initJSMaps(mapElement) {
    Geolocation.getCurrentPosition().then(pos => {
      let LatLng = new GoogleMapsLatLng(pos.coords.latitude, pos.coords.longitude);
      var mapOptions = {
              center: LatLng,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.RoadMAP
          };
      new google.maps.Map(mapElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }

  initNativeMaps(mapElement) {
    this.map = new GoogleMap(mapElement);
    mapElement.classList.add('show-map');

    GoogleMap.isAvailable().then(() => {
      const position = new GoogleMapsLatLng(43.074395, -89.381056);
      this.map.setPosition(position);
    });
  }


  ionViewDidLoad() {
    let element = document.getElementById('map');
    if (!element) {
      console.error('Unable to initialize map, no map element with #map view reference.');
      return;
    }

    // Disable this switch if you'd like to only use JS maps, as the APIs
    // are slightly different between the two. However, this makes it easy
    // to use native maps while running in Cordova, and JS maps on the web.
    if (this.platform.is('cordova') === true) {
      this.initNativeMaps(element);
    } else {
      this.initJSMaps(element);
    }
  }

}
