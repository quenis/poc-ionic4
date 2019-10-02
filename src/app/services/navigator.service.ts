import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService { 

  constructor(private router: Router) {
    
  }

  public async goTo(page, param?: any) {        
    await this.router.navigate([page], param);
  }  
}
