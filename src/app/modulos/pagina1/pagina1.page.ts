import { Component } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page {

  constructor(private navigator: NavigatorService) {

    let retorno = this.navigator.getParam();
    console.log(retorno);    
  }

  public pagina2(): void {
    this.navigator.goTo('/modulos/pagina2');
  }

  public voltar(): void {
    this.navigator.goTo('/modulos/home');
  }

  ionViewWillEnter() {

  }
}
