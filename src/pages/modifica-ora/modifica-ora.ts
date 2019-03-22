import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElencoTermostatiPage } from '../elenco-termostati/elenco-termostati';
import { TemperaturaPage } from '../temperatura/temperatura';
import { ElencoPresetPage } from '../elenco-preset/elenco-preset';
import { ModificaTemperaturaPage } from '../modifica-temperatura/modifica-temperatura';
import { ProgrammaSettimanalePage } from '../programma-settimanale/programma-settimanale';
import { ProgrammaGiornalieroPage } from '../programma-giornaliero/programma-giornaliero';


@Component({
  selector: 'page-modifica-ora',
  templateUrl: 'modifica-ora.html'
})
export class ModificaOraPage {

  constructor(public navCtrl: NavController) {
  }
  goToElencoTermostati(params){
    if (!params) params = {};
    this.navCtrl.push(ElencoTermostatiPage);
  }goToTemperatura(params){
    if (!params) params = {};
    this.navCtrl.push(TemperaturaPage);
  }goToElencoPreset(params){
    if (!params) params = {};
    this.navCtrl.push(ElencoPresetPage);
  }goToModificaTemperatura(params){
    if (!params) params = {};
    this.navCtrl.push(ModificaTemperaturaPage);
  }goToProgrammaSettimanale(params){
    if (!params) params = {};
    this.navCtrl.push(ProgrammaSettimanalePage);
  }goToProgrammaGiornaliero(params){
    if (!params) params = {};
    this.navCtrl.push(ProgrammaGiornalieroPage);
  }goToModificaOra(params){
    if (!params) params = {};
    this.navCtrl.push(ModificaOraPage);
  }

  goToAccept(){
    this.navCtrl.pop();
  }
  
}
