import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page {

  constructor(private navigator: NavigatorService) { }

  public pagina3(): void {   
    this.navigator.goTo('/modulos/pagina3');    
  }

  public voltar(): void {   
    this.navigator.goTo('/modulos/pagina1');    
  }

}
