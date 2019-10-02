import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService { 

  constructor(private router: Router) {
    
  }

  /**
   * Faz a navegação entre as páginas passando parâmetro ou não.
   * 
   * @param url Url da página.
   * @param param Parâmetro que será passado para a página.
   */
  public async goTo(url, param?: any) {        
    await this.router.navigate([url], param ? this.passParam(param) : param);
  }  

  /**
   * Passa o parâmetro caso haja algum.
   *    
   * @param param Parâmetro que será passado para a página.
   */
  private passParam(param: any): NavigationExtras {        
    let navigationExtras: NavigationExtras = {
      state: {
        param: param
      }
    };
    return navigationExtras;
  }  
}
