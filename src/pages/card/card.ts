import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardServiceProvider } from '../../providers/card-service/card-service';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})

export class CardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cardServiceProvider: CardServiceProvider) {

  }

  card: any

  ionViewDidLoad() {
    console.log('yoyoyo')
    this.cardServiceProvider.getCardData().subscribe(data => {
      this.card = data;
      console.log(this.card.results[0]);
    })
  }

  chosenAnswer() {
    // this.cardServiceProvider.getCardData().subscribe(data => {
    //   this.card = data
    //   console.log(this.card)
    // })
  }

}
