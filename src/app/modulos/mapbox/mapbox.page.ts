import { Component, OnInit, ViewChild } from '@angular/core';
import { MapboxService } from 'src/app/services/mapbox.service';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.page.html',
  styleUrls: ['./mapbox.page.scss'],
})
export class MapboxPage implements OnInit {

  private map: HTMLElement;

  constructor(
    private mapboxService: MapboxService
  ) {

  }

  ngOnInit() {
    this.map = document.getElementById('map');
    if (this.map) {
      this.mapboxService.initializeMap(this.map).then(() => {
        this.mapboxService.map.resize();
      });
    }
  }

}
