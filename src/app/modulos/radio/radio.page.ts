import { Component, OnInit } from '@angular/core';

import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Observable } from 'rxjs';
import { StreamingService } from 'src/app/services/streaming.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  private radioIcon = "play";
  private radioState = false;
  constructor(
    private streaming: StreamingService,
  ) { }

  ngOnInit() {
  }

  toggleRadio(){
    if(this.radioState){
      console.log("entrei");
      this.streaming.toggle();
    }else{
      this.streaming.play();
    }
    this.radioState = true;
  }
}
