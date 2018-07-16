import { Component, OnInit } from '@angular/core';
import { StatisticsServiceProvider } from '../../providers/statistics-service/statistics-service';

/**
 * Generated class for the StatisticsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'statistics',
  templateUrl: 'statistics.html'
})

export class StatisticsComponent implements OnInit{

  statistics: any;

  constructor(public statisticsProvider: StatisticsServiceProvider) {
  }

  ngOnInit() {
    this.statisticsProvider.getStatistics().subscribe(data => {
      this.statistics = data;
      console.log(this.statistics.results[0].location.city)
    })
  }

}
