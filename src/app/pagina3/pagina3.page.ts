import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page {

  constructor(private router: Router) { }

  public pagina4(): void {   
    this.router.navigateByUrl('/pagina4');
    
  }

  public voltar(): void {   
    this.router.navigateByUrl('/pagina2');    
  }

}
