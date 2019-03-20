import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElencoTermostatiPage } from '../elenco-termostati/elenco-termostati';
import { TemperaturaPage } from '../temperatura/temperatura';

@Component({
  selector: 'page-programma-settimanale',
  templateUrl: 'programma-settimanale.html'
})
export class ProgrammaSettimanalePage {

  constructor(public navCtrl: NavController) {
  }
  goToElencoTermostati(params){
    if (!params) params = {};
    this.navCtrl.push(ElencoTermostatiPage);
  }goToTemperatura(params){
    if (!params) params = {};
    this.navCtrl.push(TemperaturaPage);
  }
}
