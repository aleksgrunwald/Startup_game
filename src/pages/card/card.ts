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

  chosenAnswer(event) {
    console.log(event.pointerType);

    // switch (event.pointerType) {
      
    //           case 'MouseEvent':

    //           console.log("clicked moused");
    //           // this.cardServiceProvider.sendAnswer(event);
    //           // this.card = this.cardServiceProvider.getCardData();
    //           // this.statisticsComponent.getStatistics();
    //           break;

    //           case 'SwipeEvent':
    //           console.log("swipe event");
    //               // switch (event.offsetDirection) {
    //               //   case 2: this.cardServiceProvider.sendAnswer("no"); break;
    //               //   case 4: this.cardServiceProvider.sendAnswer("yes"); break;
    //               //   default: console.log("magic"); break;
    //               // };
    //             break;
    // }
    
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CardDetailsPopoverComponent, {}, {cssClass: 'cardDetailsPopover'});

    popover.present();
  }

}
