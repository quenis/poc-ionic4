import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { SettingsService } from './settings.service';
import { Observable, throwError, from } from 'rxjs';
import { catchError, mergeMap, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private settings: SettingsService) { }

  // Intercepta a requisição antes dela ser enviada.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.settings.tokenWSO2)
      .pipe(
        mergeMap(token => {

          if (localStorage.getItem('access_token_poc')) {
            token = localStorage.getItem('access_token_poc');
          }

          let clonedReq = this.addToken(request, token);
          return next.handle(clonedReq).pipe(
            catchError(exception => {

              // Se for 401 e o código do erro for 900901, então o token do WSO2 expirou.
              if (exception !== null
                && exception !== undefined
                && exception.status === 401) {

                // Solicita um novo token do WSO2 e reexecuta a requisição solicitada pelo o usuário.
                return this.settings.revalidaTokenWSO2()
                  .pipe(
                    flatMap((data) => {
                      localStorage.setItem('access_token_poc', (data as any).access_token);
                      clonedReq = this.addToken(request, (data as any).access_token);
                      return next.handle(clonedReq);
                    })
                  );
              }
              return throwError(exception);
            })
          );
        })
      );
  }

  // Adiciona o token no header da requisição.
  private addToken(request: HttpRequest<any>, token: any): HttpRequest<any> {
    if (token) {
      let clone: HttpRequest<any>;
      let header: any;

      header = {
        Authorization: `Bearer ${token}`,
        Accept: '*/*',
        'Content-Type': 'application/json'
      }

      clone = request.clone({
        setHeaders: header
      });
      return clone;
    }
    return request;
  }
}
