import { Component, OnInit } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx';

declare let L: any;

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
})
export class LeafletPage implements OnInit {

  constructor(
    private statusbar: StatusBar
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
    let mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
  }

}
