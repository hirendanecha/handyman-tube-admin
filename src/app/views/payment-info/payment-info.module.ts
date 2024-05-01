import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentInfoRoutingModule } from './payment-info-routing.module';
import { PaymentInfoComponent } from './payment-info.component';
import { SharedModule } from '../../@shared/shared.module';


@NgModule({
  declarations: [
    PaymentInfoComponent,
  ],
  imports: [
    CommonModule,
    PaymentInfoRoutingModule,
    SharedModule
  ]
})
export class PaymentInfoModule { }
