import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewofferPageRoutingModule } from './newoffer-routing.module';

import { NewofferPage } from './newoffer.page';

const routes: Routes = [
  {
    path: '',
    component: NewofferPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewofferPage]
})
export class NewofferPageModule {}
