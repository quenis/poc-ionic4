import { Component } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page {

  constructor(private navigator: NavigatorService) { }

  public pagina4(): void {   
    this.navigator.goTo('/modulos/pagina4');
    
  }

  public voltar(): void {   
    this.navigator.goTo('/modulos/pagina2');    
  }

}
