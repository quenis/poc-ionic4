import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page {

  constructor(private router: Router) { }

  public pagina6(): void {   
    this.router.navigateByUrl('/pagina6');
    
  }

  public voltar(): void {   
    this.router.navigateByUrl('/pagina4');    
  }

}
