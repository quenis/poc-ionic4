import { Injectable } from '@angular/core';
import { MediaObject, Media } from '@ionic-native/media/ngx';
import { MusicControls } from '@ionic-native/music-controls/ngx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {
  
  private file: MediaObject = this.media.create('http://200.137.217.155:8010/radiouniversitaria');
  // private controls;
  private started = false;
   
  constructor(
    private media: Media,
    private musicControls: MusicControls
  ) { }


  private startController(){
    this.musicControls.create({
      track       : 'Rádio-UFG',        // optional, default : ''
      // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
      //           or a remote url ('http://...', 'https://...', 'ftp://...')
      isPlaying   : true,                         // optional, default : true
      // hide previous/next/close buttons:
      hasPrev   : false,      // show previous button, optional, default: true
      hasNext   : false,      // show next button, optional, default: true
      hasClose  : true,       // show close button, optional, default: false
    
    // iOS only, optional
      album       : 'Absolution',     // optional, default: ''
      hasSkipForward : false,  // show skip forward button, optional, default: false
      hasSkipBackward : false, // show skip backward button, optional, default: false
      hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional
    
      // Android only, optional
      // text displayed in the status bar when the notification (and the ticker) are updated, optional
      ticker    : 'Now playing "Time is Running Out"',
      // All icons default to their built-in android equivalents
      playIcon: 'md-play',
      pauseIcon: 'md-pause',
      closeIcon: 'md-close',
      notificationIcon: 'notification'
     });
      
  }

  private controllerEvents(){
    this.musicControls.subscribe().subscribe(action => {
      console.log(action);
      const object = JSON.parse(action);
      switch (object.message) {
        case "music-controls-pause":
          console.log("pause");
          this.file.pause();
          this.musicControls.updateIsPlaying(false);
          this.started = false;
          break;

        case "music-controls-play":
          console.log("play");
          this.file.play();
          this.musicControls.updateIsPlaying(true);
          this.started = true;
          break;

        case "music-controls-destroy":
            console.log("stop");
            this.file.stop();
            break;
      
        default:
          break;
      }
    });
  }

  onStatusUpdate(): Observable<any>{
    return new Observable(observer => {
      this.file.onStatusUpdate.subscribe(status => {
        observer.next(status);
      });
    });
  }

  startListener(){
    this.onStatusUpdate().subscribe(response => {
      if(response == 1){
        console.log("play");
      }else if(response == 2){
        console.log("resume1");
          this.started = true;
      }else if(response == 3){
        this.started = false;
        console.log("pause");
      }
    })
  }

  public play(){
    // inicia o controlador
    this.startController();
    // inicia o listener do controlador
    this.musicControls.listen();
    this.controllerEvents();
    // da play na radio
    this.file.play();
    // inicia o listener do controlador de media
    this.startListener();
    
  }

  public toggle(){
    if(this.started){ 
      this.pause();
    }else{
      this.resume();
    }
    this.started = !this.started;
  }

  public pause(){
    this.file.pause();
    this.musicControls.updateIsPlaying(false);
  }

  public resume(){
    this.file.play();
    this.musicControls.updateIsPlaying(true);
  }

  public stop(){
    this.musicControls.destroy();
  }

  
}
