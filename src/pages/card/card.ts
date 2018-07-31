import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardServiceProvider } from '../../providers/card-service/card-service';
import { StatisticsComponent } from '../../components/statistics/statistics';


@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})

export class CardPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public cardServiceProvider: CardServiceProvider
  ) {}

  @ViewChild(StatisticsComponent)
  statisticsComponent: StatisticsComponent
  card: any;

  ionViewDidLoad() {
    this.cardServiceProvider.getCardData().subscribe(data => {
      this.card = data;
    });
    this.statisticsComponent.getStatistics();
  }

  chosenAnswer(answer) {
    this.cardServiceProvider.sendAnswer(answer);
    this.cardServiceProvider.getCardData().subscribe(data => {
      this.card = data;
    });
    this.statisticsComponent.getStatistics();
  }

}
