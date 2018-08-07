import { Component } from '@angular/core';
import { PopoverController, NavController } from '../../../node_modules/ionic-angular/umd';

@Component({
  selector: 'card-details-popover',
  templateUrl: 'card-details-popover.html'
})
export class CardDetailsPopoverComponent {


  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) {
    
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(this);
    popover.present({
      ev: myEvent
    });
  }

}
