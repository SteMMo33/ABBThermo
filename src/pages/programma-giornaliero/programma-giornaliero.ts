import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ElencoTermostatiPage } from '../elenco-termostati/elenco-termostati';
import { TemperaturaPage } from '../temperatura/temperatura';
import { ElencoPresetPage } from '../elenco-preset/elenco-preset';
import { ModificaTemperaturaPage } from '../modifica-temperatura/modifica-temperatura';
import { ProgrammaSettimanalePage } from '../programma-settimanale/programma-settimanale';
import { ModificaOraPage } from '../modifica-ora/modifica-ora';

@Component({
  selector: 'page-programma-giornaliero',
  templateUrl: 'programma-giornaliero.html'
})
export class ProgrammaGiornalieroPage {

  private dayDesc : string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dayDesc = this.navParams.get('dayDesc');    
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
    this.navCtrl.pop()
  }
}
