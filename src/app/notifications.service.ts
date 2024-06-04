import { Injectable } from '@angular/core';
import {Capacitor} from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { AngularFireDatabase} from '@angular/fire/compat/database';


@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    constructor(
        public db:AngularFireDatabase,
    ) { }
    initPush() {
        if (Capacitor.getPlatform() !== 'web') {
            this.registerPush();
        }
    }
    private registerPush() {
        PushNotifications.requestPermissions().then(permission => {
            if (permission.receive === 'granted') {
                PushNotifications.register();
            }
            else {
                // If permission is not granted
            }
        });
        PushNotifications.addListener('registration', (token:any) => {
            console.log(token); 
            localStorage.setItem("token",token)

            // this.db.database.ref(`users/`+localStorage.getItem("uid")).push({
            //     token:token
            // })
        });
        PushNotifications.addListener('registrationError', (err)=> {
            console.log(err);
        });
        PushNotifications.addListener('pushNotificationReceived',(notifications) => {
            console.log(notifications);
        });
    
    }
}