import { Component } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page {

  constructor(private navigator: NavigatorService) { }

  public pagina5(): void {   
    this.navigator.goTo('/modulos/pagina5');
    
  }

  public voltar(): void {   
    this.navigator.goTo('/modulos/pagina3');    
  }

}
