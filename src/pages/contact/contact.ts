import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  type: any = "Profile";

  constructor(public navCtrl: NavController) {

  }

}
