import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import mapbox from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  private _mapInstance: any;

  private manyPoints: any[] = [
    { latitude: -16.676566, longitude: -49.257486 },
    { latitude: -16.674840, longitude: -49.256273 },
    { latitude: -16.676093, longitude: -49.253934 },
    { latitude: -16.683216, longitude: -49.257829 }
  ]

  constructor(
    
  ) {
    mapbox.accessToken = environment.MAPBOX_TOKEN;
  }

  get map(): any {
    return this._mapInstance;
  }

  public async initializeMap(map: HTMLElement) {
    this._mapInstance = await new mapbox.Map({
      container: map,
      style: 'mapbox://styles/andreluiss/ck3fwd98865vw1cpg85jtjbbi',
      center: [-49.255, -16.6799],
      zoom: 14
    });
    new mapbox.Marker({ color: '#D40000' }).setLngLat([-49.255, -16.6799]).addTo(this._mapInstance);
    this.markerManyPoints();
  }

  public markerManyPoints() {
    this.manyPoints.forEach(coordinate => {
      new mapbox.Marker({ color: '#1F75FE' }).setLngLat([coordinate.longitude, coordinate.latitude]).addTo(this._mapInstance);
    });
  }
}
