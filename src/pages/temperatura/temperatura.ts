import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElencoPresetPage } from '../elenco-preset/elenco-preset';
import { ModificaTemperaturaPage } from '../modifica-temperatura/modifica-temperatura';
import { ProgrammaSettimanalePage } from '../programma-settimanale/programma-settimanale';
import { ProgrammaGiornalieroPage } from '../programma-giornaliero/programma-giornaliero';
import { ElencoTermostatiPage } from '../elenco-termostati/elenco-termostati';
import { ModificaOraPage } from '../modifica-ora/modifica-ora';

@Component({
  selector: 'page-temperatura',
  templateUrl: 'temperatura.html'
})
export class TemperaturaPage {

  constructor(public navCtrl: NavController) {
  }
  goToElencoPreset(params){
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
  }goToTemperatura(params){
    if (!params) params = {};
    this.navCtrl.push(TemperaturaPage);
  }goToModificaOra(params){
    if (!params) params = {};
    this.navCtrl.push(ModificaOraPage);
  }
}
