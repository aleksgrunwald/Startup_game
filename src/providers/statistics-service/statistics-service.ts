import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getParams } from "../../../api";
/*
  Generated class for the StatisticsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatisticsServiceProvider {
  constructor(public http: HttpClient) {}

  downloadStatistics() {
    const params = getParams();
    return {
      data: [params.param1, params.param2, params.cash]
    };
    // return this.http.get('https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8');
  }
}
