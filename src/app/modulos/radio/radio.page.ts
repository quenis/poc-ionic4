import { Component, OnInit } from '@angular/core';

import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  private radioIcon = "play";
  private radioState = false;
  private file: MediaObject = this.media.create('http://200.137.217.155:8010/radiouniversitaria');
  constructor(
    private media: Media
  ) { }

  ngOnInit() {
  }
  toggleRadio(){
    if(this.radioState){
      console.log("pausei");
      this.radioState = !this.radioState;
      this.radioIcon = "play";
      this.file.pause();
    }else{
      console.log("dei play");
      this.radioIcon = "pause";
      this.radioState = !this.radioState;
      this.file.play();
    }
  }

}
