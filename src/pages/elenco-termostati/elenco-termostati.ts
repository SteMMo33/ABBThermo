import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TemperaturaPage } from '../temperatura/temperatura';
import { ElencoPresetPage } from '../elenco-preset/elenco-preset';
import { ModificaTemperaturaPage } from '../modifica-temperatura/modifica-temperatura';
import { ProgrammaSettimanalePage } from '../programma-settimanale/programma-settimanale';
import { ProgrammaGiornalieroPage } from '../programma-giornaliero/programma-giornaliero';
import { ModificaOraPage } from '../modifica-ora/modifica-ora';

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
  }goToElencoTermostati(params){
    if (!params) params = {};
    this.navCtrl.push(ElencoTermostatiPage);
  }goToModificaOra(params){
    if (!params) params = {};
    this.navCtrl.push(ModificaOraPage);
  }
}
