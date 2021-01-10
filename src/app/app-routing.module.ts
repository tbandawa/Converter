import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyComponent } from './currency/currency.component'
import { LengthComponent } from './length/length.component'

const routes: Routes = [
  { path: '', component: CurrencyComponent },
  { path: 'length', component: LengthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
