import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CupertinoPane, CupertinoSettings } from 'cupertino-pane';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myPane: any
  constructor(public navCtrl: NavController) {
  }

  async ngAfterViewInit(){
    let a = document.getElementsByClassName('cupertino-pane')
    let settings: CupertinoSettings = { 
      //showDraggable: true,
      topperOverflow : true
     };
    
    console.log(a);
    this.myPane = new CupertinoPane('.cupertino-pane', settings);
    
    await this.myPane.present({animate: true});
  }

  openNow(){
    this.myPane.present({animate: true});
  }

}
