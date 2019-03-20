import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ImpostazioniDiRetePage } from '../pages/impostazioni-di-rete/impostazioni-di-rete';
import { LoginPage } from '../pages/login/login';
import { ElencoCasePage } from '../pages/elenco-case/elenco-case';


import { TemperaturaPage } from '../pages/temperatura/temperatura';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TemperaturaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToImpostazioniDiRete(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ImpostazioniDiRetePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToElencoCase(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ElencoCasePage);
  }
}
