import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, PopoverController } from "ionic-angular";
import { CardServiceProvider } from "../../providers/card-service/card-service";
import { StatisticsComponent } from "../../components/statistics/statistics";
import { CardDetailsPopoverComponent } from "../../components/card-details-popover/card-details-popover";
import {} from "ionic-angular"
@IonicPage()
@Component({
  selector: "page-card",
  templateUrl: "card.html"
})
export class CardPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cardServiceProvider: CardServiceProvider,
    public popoverCtrl: PopoverController
  ) {}

  @ViewChild(StatisticsComponent) statisticsComponent: StatisticsComponent;
  card: any;

  ionViewDidLoad() {
    this.card = this.cardServiceProvider.getCardData();
    this.statisticsComponent.getStatistics();
  }

  chosenAnswer(answer) {
    this.cardServiceProvider.sendAnswer(answer);
    this.card = this.cardServiceProvider.getCardData();
    this.statisticsComponent.getStatistics();
    
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CardDetailsPopoverComponent, {}, {cssClass: 'cardDetailsPopover'});

    popover.present();
  }

}
