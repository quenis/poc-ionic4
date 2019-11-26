import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import mapbox from 'mapbox-gl';

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
    this.manyPoints.forEach(point => {
      new mapbox.Marker({ color: '#1F75FE' }).setLngLat([point.longitude, point.latitude])
      .setPopup(new mapbox.Popup({ offset: 25 }).setHTML('<h3>' + point.titulo + '</h3><p>' + point.descricao + '</p>'))
      .addTo(this._mapInstance);
    });
  }


}
