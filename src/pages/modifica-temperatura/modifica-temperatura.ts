import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElencoPresetPage } from '../elenco-preset/elenco-preset';
import { ModificaTemperaturaPage } from '../modifica-temperatura/modifica-temperatura';

@Component({
  selector: 'page-modifica-temperatura',
  templateUrl: 'modifica-temperatura.html'
})
export class ModificaTemperaturaPage {

  constructor(public navCtrl: NavController) {
  }
  goToElencoPreset(params){
    if (!params) params = {};
    this.navCtrl.push(ElencoPresetPage);
  }goToModificaTemperatura(params){
    if (!params) params = {};
    this.navCtrl.push(ModificaTemperaturaPage);
  }
}
