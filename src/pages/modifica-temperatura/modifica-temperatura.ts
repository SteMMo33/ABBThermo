import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElencoPresetPage } from '../elenco-preset/elenco-preset';

@Component({
  selector: 'page-modifica-temperatura',
  templateUrl: 'modifica-temperatura.html'
})
export class ModificaTemperaturaPage {

  private temp = 17.5;

  constructor(public navCtrl: NavController) {
	  
  }
  goToElencoPreset(params){
    if (!params) params = {};
    this.navCtrl.push(ElencoPresetPage);
  }
  
  goToModificaTemperatura(params){
    if (!params) params = {};
    this.navCtrl.push(ModificaTemperaturaPage);
  }

  goToAccept(){
    this.navCtrl.pop()
  }

  incTemp(){
    this.temp += 0.5;
  }

  decTemp(){
    this.temp -= 0.5;
  }
}
