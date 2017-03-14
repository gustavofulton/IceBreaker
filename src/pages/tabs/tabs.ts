import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MessagesPage } from '../messages/messages';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ContactPage;
  tab3Root: any = MessagesPage;
  tab4Root: any = SearchPage;
  tab5Root: any = SettingsPage;

  constructor() {

  }
}
