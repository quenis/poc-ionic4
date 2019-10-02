import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {   

  private param: any;

  constructor(private router: Router) {
    
  }

  /**
   * Faz a navegação entre as páginas passando parâmetro ou não.
   * 
   * @param url Url da página.
   * @param param Parâmetro que será passado para a página.
   */
  public async goTo(url, param?: any) {    
    await this.router.navigate([url], this.param = param);
  }  
  
  /**
   * Recupera o parâmetro caso haja.
   *      
   */
  public getParam() {      
    return this.param;
  }  
}
