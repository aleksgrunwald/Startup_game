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
//  return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
 return this.http.get('https://randomuser.me/api/');
}

sendAnswer(answer) {
  console.log(`answer sent to API. You've chosen ${answer}`)
}

}
