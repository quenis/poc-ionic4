import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import mapbox from 'mapbox-gl';

const HTTPOPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
}

const COLOR_PIN_OTHERS = '#1F75FE';
const COLOR_PIN_MY_POSITION = '#D40000';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  private _mapInstance: any;

  private manyPoints: any[] = [
    { latitude: -16.676566, longitude: -49.257486, titulo: 'Mecânica', descricao: 'Oficina de conserto de bicicleta motorizada, produzida na china no ano de 1810.' },
    { latitude: -16.674840, longitude: -49.256273, titulo: 'Padaria', descricao: 'Padaria do seu zé, referência em como não fazer pão a mais de 200 anos em Goiânia.' },
    { latitude: -16.676093, longitude: -49.253934, titulo: "Bob's", descricao: 'Um salão tradicional da região inspirado na mulher mais ilustre de todas Dona Florinda.' },
    { latitude: -16.683216, longitude: -49.257829, titulo: 'Faculdade BySelf', descricao: 'Ensino modelo mundial onde o aluno decide o que estudar e que horas estudar.' }
  ]

  private myPosition = { latitude: -16.6799, longitude: -49.255, titulo: 'Eu', descricao: 'Minha posição atual' };
  private routeEndPoint = { latitude: -16.6799, longitude: -49.262920, titulo: 'Casa do seu zé', descricao: 'Avó fraterno' };

  constructor(
    private http: HttpClient
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
    this.instanceMarker([this.myPosition], COLOR_PIN_MY_POSITION);
    this.instanceMarker(this.manyPoints, COLOR_PIN_OTHERS);
    this.routeMap();
  }

  private instanceMarker(markers: any[], color: string) {
    markers.forEach(point => {
      new mapbox.Marker({ color, closeButton: false }).setLngLat([point.longitude, point.latitude])
        .setPopup(new mapbox.Popup({ offset: 25, closeButton: false }).setHTML('<h3>' + point.titulo + '</h3><p>' + point.descricao + '</p>'))
        .addTo(this._mapInstance);
    });
  }

  public routeMap() {
    this.instanceMarker([this.routeEndPoint], '#71BC78');
    const SERVICE = `directions/v5/mapbox/driving-traffic/${this.myPosition.longitude},${this.myPosition.latitude};${this.routeEndPoint.longitude},${this.routeEndPoint.latitude}?geometries=geojson&access_token=${environment.MAPBOX_TOKEN}`;
    this.http.get(`${environment.MAPBOX_SERVICE_BASE_URL}${SERVICE}`, HTTPOPTIONS).subscribe((response: any) => {
      let route = response.routes[0].geometry.coordinates;
      let tempGeojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };
      if (this._mapInstance.getSource('route')) {
        this._mapInstance.getSource('route').setData(tempGeojson);
      } else {
        this.createSource();
        this._mapInstance.getSource('route').setData(tempGeojson);
        this.createLayer();
      }
    });
  }

  private createSource() {
    this._mapInstance.addSource('route', {
      type: 'geojson',
      data: {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-77.0323, 38.9131]
        },
        "properties": {}
      }
    });
  }

  private createLayer() {
    this._mapInstance.addLayer({
      id: 'routes',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75,
        'line-dasharray': [1, 2]
      }
    });
  }

}
