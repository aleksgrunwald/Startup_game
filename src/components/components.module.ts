import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics';
import { CardDetailsPopoverComponent } from './card-details-popover/card-details-popover';
@NgModule({
	declarations: [StatisticsComponent,
    CardDetailsPopoverComponent],
	imports: [],
	exports: [StatisticsComponent,
    CardDetailsPopoverComponent]
})
export class ComponentsModule {}
