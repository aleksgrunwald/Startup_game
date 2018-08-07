import { Component } from '@angular/core';

/**
 * Generated class for the CardDetailsPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-details-popover',
  templateUrl: 'card-details-popover.html'
})
export class CardDetailsPopoverComponent {

  text: string;

  constructor() {
    console.log('Hello CardDetailsPopoverComponent Component');
    this.text = 'Hello World';
  }

}
