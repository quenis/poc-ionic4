import { Component } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page {

  constructor(private navigator: NavigatorService) { }

  public pagina6(): void {   
    this.navigator.goTo('/modulos/pagina6');    
  }

  public voltar(): void {   
    this.navigator.goTo('/modulos/pagina4');    
  }

}
