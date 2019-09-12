import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private foto: any = '';
  constructor(private camera: Camera,
    private settings: SettingsService,
    private router: Router) { }

  public tirarFoto(): void {   
  
    this.camera.getPicture({
      quality: 100,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 600
    }).then(
      (foto) => {       
        let base64Image = 'data:image/jpeg;base64,' + foto;
        this.foto = base64Image;
      }, (error) => {

        console.log(error);
      });
  }

  public iniciarNavegacao(): void {   
    this.router.navigateByUrl('/pagina1');    
  }  

  ionViewWillEnter() {
    this.settings.abrirCarregando('Verificando conexão...').then(() => {
      this.settings.verificarConexaoInternet()
      .subscribe(
        () => {
          this.settings.fecharCarregando();
         
        }, error => {
          if (error.name === "TimeoutError") {
            this.settings.exibeDialogoGeral('Não foi possível conectar ao servidor. Verifique sua conexão com à internet.');
          }          
          this.settings.fecharCarregando();
        }
      );
    });
      
  }
}
