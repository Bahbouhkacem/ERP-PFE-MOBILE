import { Component } from '@angular/core';
//import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InAppBrowser } from '@capgo/inappbrowser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(

) {}

ionViewWillEnter() {
  var options = "width=437,height=250,location=no,zoom=no,keyboardDisplayRequiresUserAction=no,toolbar=no,toolbarposition=top,closebuttoncaption=fermer,usewkwebview=yes";

  InAppBrowser.open({ url: "http://google.com" });


}

}
