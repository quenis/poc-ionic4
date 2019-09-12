import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page {

  constructor(private router: Router) { }

  public pagina3(): void {   
    this.router.navigateByUrl('/modulos/pagina3');    
  }

  public voltar(): void {   
    this.router.navigateByUrl('/modulos/pagina1');    
  }

}
