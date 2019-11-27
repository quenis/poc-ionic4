import { Component, OnInit, ViewChild } from '@angular/core';
import { MapboxService } from 'src/app/services/mapbox.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.page.html',
  styleUrls: ['./mapbox.page.scss'],
})
export class MapboxPage implements OnInit {

  private map: HTMLElement;

  constructor(
    private statusbar: StatusBar,
    private mapboxService: MapboxService
  ) {

  }

  ngOnInit() {
    this.statusbar.hide();
    this.configMap();
  }

  ionViewDidLeave() {
    this.statusbar.show();
  }

  private configMap() {
    this.map = document.getElementById('map');
    if (this.map) {
      this.mapboxService.initializeMap(this.map).then(() => {
        this.mapboxService.map.on('load', () => {
          this.mapboxService.map.resize();
        })
      });
    }
  }

}
