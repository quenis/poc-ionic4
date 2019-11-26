import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import mapbox from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  private _mapInstance: any;

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
      style: 'mapbox://styles/andreluiss/ck3fwd98865vw1cpg85jtjbbi'
    });
  }
}
