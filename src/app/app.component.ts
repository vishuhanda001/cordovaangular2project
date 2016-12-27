import { Component } from '@angular/core';

let device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

 deviceinfo()
 {
   document.addEventListener('deviceready', () => {
      console.log('Using Cordova plugins with Angular 2. Cordova version: ' + device.cordova)
    }, false)
 }

}
