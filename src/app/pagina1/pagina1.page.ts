import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page {

  constructor(private router: Router) { }

  public pagina2(): void {   
    this.router.navigateByUrl('/pagina2');    
  }

  public voltar(): void {   
    this.router.navigateByUrl('/home');    
  }


}
