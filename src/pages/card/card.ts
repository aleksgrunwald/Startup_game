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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

  getCard() {
    this.cardServiceProvider.getCardData()
  }

}
