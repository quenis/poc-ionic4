import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpBackend } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Constantes } from '../shared/constantes/constantes';
import { CrudService } from 'arquitetura-mobile';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends CrudService<any> {

  public isAlertPresent: boolean = false;
  private gAlert: HTMLIonAlertElement;
  private loader: HTMLIonLoadingElement;

  constructor(private httpClient: HttpClient,
    private alertCtrl: AlertController,
    private handler: HttpBackend,
    private loadingCtrl: LoadingController) {
    super(httpClient);
  }

  getBaseUrl(): string {
    return environment.api_url;
  }
  getPath(): string {
    return '/patrimonio/1.0.0';
  }

  public verificarConexaoInternet(): Observable<any> {
    return this.httpClient.get(this.geturlcompleta('/local-bem/local-bem/ativos/') + 0).pipe(timeout(10000));
  }

  /**
* Verifica que o token do wso2 expirou e solicita outro.
*/
  public revalidaTokenWSO2(): Observable<any> {

    const body = new HttpParams()
      .set('grant_type', 'client_credentials');

    let options = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${Constantes.BASE64_TOKEN}`)
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };

    // Faz com que essa requisição não passe pelo interceptor.  
    return new HttpClient(this.handler).post(`${this.getBaseUrl()}/token`, body, options).pipe(timeout(10000));
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
