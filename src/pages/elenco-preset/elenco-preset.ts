import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModificaTemperaturaPage } from '../modifica-temperatura/modifica-temperatura';

@Component({
  selector: 'page-elenco-preset',
  templateUrl: 'elenco-preset.html'
})
export class ElencoPresetPage {

  constructor(public navCtrl: NavController) {
  }
  goToModificaTemperatura(params){
    if (!params) params = {};
    this.navCtrl.push(ModificaTemperaturaPage);
  }goToElencoPreset(params){
    if (!params) params = {};
    this.navCtrl.push(ElencoPresetPage);
  }
}
