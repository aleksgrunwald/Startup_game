import { Component} from '@angular/core';
import { StatisticsServiceProvider } from '../../providers/statistics-service/statistics-service';


@Component({
  selector: 'statistics',
  templateUrl: 'statistics.html'
})

export class StatisticsComponent {

  statistics: any = [];

  constructor(public statisticsProvider: StatisticsServiceProvider) {
  }

  
  getStatistics() {
    this.statisticsProvider.downloadStatistics().subscribe(data => {
      this.statistics = data;
      console.log(data)
    })
  }


}
