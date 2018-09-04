import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CardPage } from '../pages/card/card';
import { CardServiceProvider } from '../providers/card-service/card-service';
import { StatisticsComponent } from '../components/statistics/statistics';
import { StatisticsServiceProvider } from '../providers/statistics-service/statistics-service';
import { CardDetailsPopoverComponent } from '../components/card-details-popover/card-details-popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CardPage,
    StatisticsComponent,
    CardDetailsPopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CardPage,
    StatisticsComponent,
    CardDetailsPopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardServiceProvider,
    StatisticsServiceProvider
  ]
})
export class AppModule {}
