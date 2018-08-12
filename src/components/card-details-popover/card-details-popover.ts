import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams, PopoverController } from "ionic-angular";

@Component({
  selector: 'card-details-popover',
  templateUrl: 'card-details-popover.html'
})
export class CardDetailsPopoverComponent {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public viewCtrl: ViewController
  ) {}

  closePopover () {
      this.viewCtrl.dismiss();
  }

}
