import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { SettingsService } from 'src/app/services/settings.service';
import { NavigatorService } from 'src/app/services/navigator.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public foto: any = '';
  constructor(private camera: Camera,
    private settings: SettingsService,
    private navigator: NavigatorService) { }

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

    let objeto_teste = {
      login: 'quenis',
      numeroTombamento: '1234',
      refFotoPlaqueta: 'url1',
      refFotoBem: 'url2',
      situacao: '3',
      idLocalBem: '1596',      
      latitude: '-49,65454',
      longitude: '-26,645',
      mesReferencia: new Date().getMonth() + 1,
      anoReferencia: new Date().getFullYear(),
      status: 1,
      usuarioDenominacaoCorreta: false
    };  

    this.navigator.goTo('/modulos/pagina1', objeto_teste);   
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
