import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

declare let L: any;

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
})
export class LeafletPage implements OnInit {

  private myPosition = { latitude: -16.6799, longitude: -49.255, titulo: 'Eu', descricao: 'Minha posição atual' };
  private routeEndPoint = { latitude: -16.6799, longitude: -49.262920, titulo: 'Casa do seu zé', descricao: 'Avó fraterno' };

  constructor(
    private statusbar: StatusBar,
    private launchNavigator: LaunchNavigator
  ) {

  }

  ngOnInit() {
    this.statusbar.hide();
  }

  ionViewDidEnter() {
    this.initializeMap();
  }

  ionViewDidLeave() {
    this.statusbar.show();
  }

  public initializeMap() {
    let mymap = L.map('mapid').setView([this.myPosition.latitude, this.myPosition.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    L.marker([this.myPosition.latitude, this.myPosition.longitude],).addTo(mymap)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }

  public openGoogleMaps() {
    let options: LaunchNavigatorOptions = {
      start: `${this.myPosition.latitude}, ${this.myPosition.longitude}`,
      app: this.launchNavigator.APP.GOOGLE_MAPS,
      transportMode: this.launchNavigator.TRANSPORT_MODE.TURN_BY_TURN
    }

    this.launchNavigator.navigate([this.routeEndPoint.latitude, this.routeEndPoint.longitude], options);
  }

}
