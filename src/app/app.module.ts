import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TvmazeModule } from 'tvmaze';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import { SplashScreen } from '@ionic/angular/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonButton } from '@ionic/angular';

import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TvmazeModule,
    IonicModule.forRoot(),
    //IonButton
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IonButton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
