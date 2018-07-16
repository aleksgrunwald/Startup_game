import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()

export class CardServiceProvider {

  constructor(public http: HttpClient) { }


  getCardData() {
    //  return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    return this.http.get('https://randomuser.me/api/');
  }

  sendAnswer(answer) {
    console.log(`answer sent to API. You've chosen ${answer}`)
  }
}
