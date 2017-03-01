import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage} from '../tabs/tabs';
/*
  Generated class for the ConfirmCode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-confirm-code',
  templateUrl: 'confirm-code.html'
})
export class ConfirmCodePage {
  code: string;
  phoneNumber: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.code = this.navParams.get('code');
    this.phoneNumber = this.navParams.get('phoneNumber');
  }

  goToMain() {
    this.navCtrl.push(TabsPage);
  }

  refreshCode() {
    this.code = (Math.floor(Math.random() * 5000) + 1000).toString();
  }

}
