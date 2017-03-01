import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConfirmCodePage } from '../confirm-code/confirm-code'

import { SMS } from 'ionic-native';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  phoneNumber: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  goToConfirm() {
    console.log(this.phoneNumber);
    let code = Math.floor(Math.random() * 5000) + 1000;
    SMS.send(this.phoneNumber, code.toString());
    this.navCtrl.push(ConfirmCodePage, {code: code, phoneNumber: this.phoneNumber} );
  }

}
