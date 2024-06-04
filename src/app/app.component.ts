import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(    public pushNotifications:NotificationsService
  ) {

    this.pushNotifications.initPush()

  }
}
