import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentInfoComponent } from './payment-info.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentInfoComponent,
    data: {
      title: 'Payment Info',
    },
  },
  {
    path: 'edit/:id',
    component: PaymentInfoComponent,
    data: {
      title: 'Edit Payment Info',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentInfoRoutingModule { }
