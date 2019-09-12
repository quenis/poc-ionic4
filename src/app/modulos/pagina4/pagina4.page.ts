import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page {

  constructor(private router: Router) { }

  public pagina5(): void {   
    this.router.navigateByUrl('/modulos/pagina5');
    
  }

  public voltar(): void {   
    this.router.navigateByUrl('/modulos/pagina3');    
  }

}
