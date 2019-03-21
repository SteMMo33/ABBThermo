import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ImpostazioniPage } from '../pages/impostazioni/impostazioni';
import { ElencoCasePage } from '../pages/elenco-case/elenco-case';
import { ElencoTermostatiPage } from '../pages/elenco-termostati/elenco-termostati';
import { TemperaturaPage } from '../pages/temperatura/temperatura';
import { ElencoPresetPage } from '../pages/elenco-preset/elenco-preset';
import { ModificaTemperaturaPage } from '../pages/modifica-temperatura/modifica-temperatura';
import { ProgrammaSettimanalePage } from '../pages/programma-settimanale/programma-settimanale';
import { ProgrammaGiornalieroPage } from '../pages/programma-giornaliero/programma-giornaliero';
import { ModificaOraPage } from '../pages/modifica-ora/modifica-ora';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToImpostazioni(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ImpostazioniPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToElencoCase(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ElencoCasePage);
  }goToElencoTermostati(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ElencoTermostatiPage);
  }goToTemperatura(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TemperaturaPage);
  }goToElencoPreset(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ElencoPresetPage);
  }goToModificaTemperatura(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ModificaTemperaturaPage);
  }goToProgrammaSettimanale(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProgrammaSettimanalePage);
  }goToProgrammaGiornaliero(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProgrammaGiornalieroPage);
  }goToModificaOra(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ModificaOraPage);
  }
}
