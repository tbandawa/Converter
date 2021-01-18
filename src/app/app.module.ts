import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule  } from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CoreModule } from './core/core.module'
import { CurrencyComponent } from './currency/currency.component'
import { LengthComponent } from './length/length.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    LengthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
