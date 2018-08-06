import { Component } from "@angular/core";
import { StatisticsServiceProvider } from "../../providers/statistics-service/statistics-service";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@Component({
  selector: "statistics",
  templateUrl: "statistics.html"
})
export class StatisticsComponent {
  statistics: any = [];
  changedStatistics: any = {};
  startOfTheGame: boolean = true;
  icon: any = [];

  constructor(
    public statisticsProvider: StatisticsServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}


  refreshStatisticsColor (data : any) {
    for (var i = 0; i < data.data.length; i++) { 
      console.log(i);
        this.changedStatistics[i].red = false;
        this.changedStatistics[i].green = false;
    }
  }

  setIconsForStatistics () {
    this.icon[0] = "https://cdn3.iconfinder.com/data/icons/business-and-finance-2/512/money_bag_dollar.png";
    this.icon[1] = "https://cdn4.iconfinder.com/data/icons/hr-recruitment-management-part-3/360/employee_care_wellbeing_selection_hire-512.png";
    this.icon[2] = "https://cdn2.iconfinder.com/data/icons/competition-success/512/favourites_favorites_folder_competitive_trophy_medal_winning_popularity_glory_high_awards_winners_badge_hero_victory_hit_proud_honor_leadership_competition_prize_premium_-512.png";
  }

  getStatistics() {

      this.setIconsForStatistics();
      const data = this.statisticsProvider.downloadStatistics();

      for (var i = 0; i < data.data.length; i++) {

        this.changedStatistics[i] = {};
        this.changedStatistics[i].red = false;
        this.changedStatistics[i].green = false;

        if (!this.startOfTheGame) {
          if ((this.statistics.data[i] == data.data[i])||(this.startOfTheGame)) {
          } else {

            if (this.statistics.data[i] > data.data[i])
              this.changedStatistics[i].red = true;
            else this.changedStatistics[i].green = true;
          }
        }
      }

    console.log(this.changedStatistics);

    this.statistics = data;
    this.startOfTheGame = false;

    setTimeout(() => {
      this.refreshStatisticsColor(data);
    }, 1500);
  }

}
