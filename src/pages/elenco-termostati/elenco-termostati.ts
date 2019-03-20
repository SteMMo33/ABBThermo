import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TemperaturaPage } from '../temperatura/temperatura';

@Component({
  selector: 'page-elenco-termostati',
  templateUrl: 'elenco-termostati.html'
})
export class ElencoTermostatiPage {

  constructor(public navCtrl: NavController) {
  }
  goToTemperatura(params){
    if (!params) params = {};
    this.navCtrl.push(TemperaturaPage);
  }
}
