import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page {

  constructor(private router: Router,
    private route: ActivatedRoute) {
      
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state.param);
      }
    });
  }


  public pagina2(): void {
    this.router.navigateByUrl('/modulos/pagina2');
  }

  public voltar(): void {
    this.router.navigateByUrl('/modulos/home');
  }

  ionViewWillEnter() {

  }
}
