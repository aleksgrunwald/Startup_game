import { Component} from '@angular/core';
import { StatisticsServiceProvider } from '../../providers/statistics-service/statistics-service';


@Component({
  selector: 'statistics',
  templateUrl: 'statistics.html'
})

export class StatisticsComponent {

  statistics: any = [];
  changedStatistics: any = {};

  constructor(public statisticsProvider: StatisticsServiceProvider) {
  }

  
  getStatistics() {

    this.statisticsProvider.downloadStatistics().subscribe(data => {

      for (var i = 0; i < this.statistics.length; i++) {
        this.changedStatistics[i] = {};

        if (this.statistics.data[i] == data.data[i])  {
        
          this.changedStatistics[i].changed = false;
        
        } else {

          this.changedStatistics[i].changed = true

          if (this.statistics.data[i] > data.data[i]) this.changedStatistics[i].color = true;

          else this.changedStatistics[i].color = false;

        }
      }

      console.log(this.changedStatistics);

      this.statistics = data;
    })
  }


}
