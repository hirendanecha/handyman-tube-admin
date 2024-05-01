import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRequestComponent } from './contact-request.component';

const routes: Routes = [
  {
    path: '',
    component: ContactRequestComponent,
    data: {
      title: 'Contact Request',
    },
  },
  {
    path: 'edit/:id',
    component: ContactRequestComponent,
    data: {
      title: 'Edit Contact Request',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRequestRoutingModule { }
