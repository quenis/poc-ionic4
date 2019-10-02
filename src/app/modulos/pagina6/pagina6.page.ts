import { Component } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-pagina6',
  templateUrl: './pagina6.page.html',
  styleUrls: ['./pagina6.page.scss'],
})
export class Pagina6Page {

  constructor(private navigator: NavigatorService) { }

  public voltar(): void {   
    this.navigator.goTo('/modulos/pagina5');    
  }

}
