import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private navigator: NavigatorService) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state.param);
      }
    });
  }

  public pagina2(): void {   
    this.navigator.goTo('/modulos/pagina2'); 
  }

  public voltar(): void {    
    this.navigator.goTo('/modulos/home'); 
  }

  ionViewWillEnter() {

  }
}
