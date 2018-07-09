import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CardServiceProvider Provider');
  }

getCardData() {
  console.log(this.http.get('http://18.185.102.201:8080/api/v1.0/cards/getCardByID?value=4'))
}

}
