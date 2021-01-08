import { NgModule, Optional, SkipSelf } from '@angular/core'
import { RateAdapter } from './models'
import { RateService } from './services/rate.service'
 
@NgModule({
  imports: [
  ],
  providers: [
    RateAdapter,
    RateService
  ],
  declarations: []
})
export class CoreModule { 
 
  constructor(@Optional() @SkipSelf() core: CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }

}