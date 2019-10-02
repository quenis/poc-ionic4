import { Injectable } from '@angular/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private firebase: FirebaseX) { }
  
  // Firebasex Supported Cordova Versions
  // cordova: >= 9
  // cordova-android: >= 8
  // cordova-ios: >= 5

  public getToken(){
    this.firebase.getToken()
    .then(token =>{
      console.log(`The token is ${token}`)
      localStorage.setItem("token_firebase",token)
    })
  }

  public listener(){
    this.firebase.onMessageReceived()
    .subscribe(data => {
      console.log(`FCM message: ${data}`)
    });
  }
}
