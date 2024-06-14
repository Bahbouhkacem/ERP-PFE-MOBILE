import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private iab:InAppBrowser,
    private db:AngularFireDatabase,

) {}

ionViewWillEnter() {

  var options = "width=437,height=250,location=no,zoom=no,keyboardDisplayRequiresUserAction=no,toolbar=no,toolbarposition=top,closebuttoncaption=fermer,usewkwebview=yes";
  let browser = this.iab.create("http://192.168.1.11/DEMO", "_blank",options);

  browser.show()

  browser.on("loadstart").subscribe(async e => {
    console.log('LOADSTART', e.url)
    

  })

}

}
