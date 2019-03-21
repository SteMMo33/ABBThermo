import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ImpostazioniPage } from '../pages/impostazioni/impostazioni';
import { LoginPage } from '../pages/login/login';
import { TemperaturaPage } from '../pages/temperatura/temperatura';
import { ElencoCasePage } from '../pages/elenco-case/elenco-case';
import { ElencoTermostatiPage } from '../pages/elenco-termostati/elenco-termostati';
import { ElencoPresetPage } from '../pages/elenco-preset/elenco-preset';
import { ProgrammaSettimanalePage } from '../pages/programma-settimanale/programma-settimanale';
import { ProgrammaGiornalieroPage } from '../pages/programma-giornaliero/programma-giornaliero';
import { ModificaOraPage } from '../pages/modifica-ora/modifica-ora';
import { ModificaTemperaturaPage } from '../pages/modifica-temperatura/modifica-temperatura';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ImpostazioniPage,
    LoginPage,
    TemperaturaPage,
    ElencoCasePage,
    ElencoTermostatiPage,
    ElencoPresetPage,
    ProgrammaSettimanalePage,
    ProgrammaGiornalieroPage,
    ModificaOraPage,
    ModificaTemperaturaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ImpostazioniPage,
    LoginPage,
    TemperaturaPage,
    ElencoCasePage,
    ElencoTermostatiPage,
    ElencoPresetPage,
    ProgrammaSettimanalePage,
    ProgrammaGiornalieroPage,
    ModificaOraPage,
    ModificaTemperaturaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}