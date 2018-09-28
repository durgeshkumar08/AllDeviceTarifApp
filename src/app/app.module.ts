import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarifDetailDesktopComponent } from './tarif-detail/desktop/tarif-detail-desktop.component';
import { TarifDetailMobileComponent } from './tarif-detail/mobile/tarif-detail-mobile.component';
import { TarifDetailTabletComponent } from './tarif-detail/tablet/tarif-detail-tablet.component';
import { CoreModule } from './core.module';
import { FakeDataService } from './services/fake-data-service';
import { TarifService } from './services/tarif.service';

@NgModule({
  declarations: [
    AppComponent,
    TarifDetailDesktopComponent,
    TarifDetailMobileComponent,
    TarifDetailTabletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  entryComponents: [
    TarifDetailDesktopComponent,
    TarifDetailMobileComponent,
    TarifDetailTabletComponent
  ],
  providers: [FakeDataService, TarifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
