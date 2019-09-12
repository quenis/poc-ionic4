import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina6',
  templateUrl: './pagina6.page.html',
  styleUrls: ['./pagina6.page.scss'],
})
export class Pagina6Page {

  constructor(private router: Router) { }

  public voltar(): void {   
    this.router.navigateByUrl('/modulos/pagina5');    
  }

}
