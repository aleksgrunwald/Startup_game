import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CardServiceProvider } from "../../providers/card-service/card-service";
import { StatisticsComponent } from "../../components/statistics/statistics";

@IonicPage()
@Component({
  selector: "page-card",
  templateUrl: "card.html"
})
export class CardPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cardServiceProvider: CardServiceProvider
  ) {}

  @ViewChild(StatisticsComponent) statisticsComponent: StatisticsComponent;
  card: any;

  ionViewDidLoad() {
    this.card = this.cardServiceProvider.getCardData();
    this.statisticsComponent.getStatistics();
  }

  chosenAnswer(event) {

    console.log(event)

//  switch (event.pointerType) {
   
//           case "touch":

//           this.cardServiceProvider.sendAnswer(event);
//           this.card = this.cardServiceProvider.getCardData();
//           this.statisticsComponent.getStatistics();
//           break;

//           case SwipeEvent:
//               switch (event.offsetDirection) {
//                 case 2: this.cardServiceProvider.sendAnswer("no"); break;
//                 case 4: this.cardServiceProvider.sendAnswer("yes"); break;
//                 default: console.log("magic"); break;
//               };
//             break;
//  }
    
  }
}
