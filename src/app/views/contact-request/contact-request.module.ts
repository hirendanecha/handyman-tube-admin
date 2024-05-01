import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRequestRoutingModule } from './contact-request-routing.module';
import { SharedModule } from '../../@shared/shared.module';
import { ContactRequestComponent } from './contact-request.component';


@NgModule({
  declarations: [ContactRequestComponent],
  imports: [
    CommonModule,
    ContactRequestRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactRequestModule { }
