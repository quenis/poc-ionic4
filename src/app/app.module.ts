import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './services/interceptor.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Media } from '@ionic-native/media/ngx'; 
import { MusicControls } from '@ionic-native/music-controls/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    Media,
    Camera,
    StatusBar,
    FirebaseX,
    SplashScreen,
<<<<<<< Updated upstream
    LaunchNavigator,
=======
    MusicControls,
>>>>>>> Stashed changes
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorService, 
      multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
