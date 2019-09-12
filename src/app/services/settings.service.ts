import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpBackend } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Constantes } from '../shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public baseUrl = environment.api_wso2; 
  public baseUrlPatrimonioInfra = environment.api_app; 
  public tokenWSO2: Promise<any> = this.storage.set('token', Constantes.ACCESS_TOKEN_WSO2); 
  public isAlertPresent: boolean = false;
  private gAlert: HTMLIonAlertElement; 
  private loader: HTMLIonLoadingElement;

  constructor(private httpClient: HttpClient,
    private httpClientNoInterceptor: HttpClient, 
    private alertCtrl: AlertController,
    private handler: HttpBackend,
    private storage: Storage,
    private loadingCtrl: LoadingController) { }

    public verificarConexaoInternet(): Observable<any> {
      return this.httpClient.get(this.baseUrlPatrimonioInfra + '/local-bem/local-bem/ativos/' + 0).pipe(timeout(10000));
    }

     /**
   * Verifica que o token do wso2 expirou e solicita outro.
   */
  public revalidaTokenWSO2(): Observable<any> {
    // Faz com que essa requisição não passe pelo interceptor.
    this.httpClientNoInterceptor = new HttpClient(this.handler);
  
    const body = new HttpParams()
    .set('grant_type', 'client_credentials');
      
    let options = {
      headers: new HttpHeaders()
      .set('Authorization', `Basic ${Constantes.BASE64_TOKEN}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.httpClientNoInterceptor.post(`${this.baseUrl}/token`, body, options).pipe(timeout(10000));
  }

    /**
   * Exibe um alerta geral que será usado em todos locais
   * 
   * @param message Mensagem que será exibida ao usuário.
   */
  public async exibeDialogoGeral(message: string) {
    if (!this.isAlertPresent) {
      this.gAlert = await this.alertCtrl.create({
        message: message,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.isAlertPresent = false;
            }
          }
        ]
      });
      await this.gAlert.present()
      .then(() => {
        this.isAlertPresent = true;
      });

      await this.gAlert.onDidDismiss()
      .then(() => {
        this.isAlertPresent = false;
      });
    }
  }

  public async abrirCarregando(message: string) {
    await this.loadingCtrl.create({
      message: message      
    }).then(res => {
      this.loader = res;
      this.loader.present();
    });    
  }

  public async fecharCarregando() {
    await this.loader.dismiss();
  }
}
