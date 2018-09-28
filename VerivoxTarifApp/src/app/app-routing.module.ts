import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { TarifDetailDesktopComponent } from './tarif-detail/desktop/tarif-detail-desktop.component';
import { TarifDetailTabletComponent } from './tarif-detail/tablet/tarif-detail-tablet.component';
import { TarifDetailMobileComponent } from './tarif-detail/mobile/tarif-detail-mobile.component';
import { AppStateService } from './app-state.service';

const desktop_routes: Routes = [
  { path: '', component: TarifDetailDesktopComponent },
  { path: '**', redirectTo: '' }
];

const tablet_routes: Routes = [
  { path: '', component: TarifDetailTabletComponent },
  { path: '**', redirectTo: '' }
];

const mobile_routes: Routes = [
  { path: '', component: TarifDetailMobileComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  public constructor(private router: Router,
    private appStateService: AppStateService) {
      if (appStateService.getIsMobileResolution()) {
        console.log('Setting routing for mobile device');
        router.resetConfig(mobile_routes);
      } else if (appStateService.getIsTabletResolution()) {
        console.log('Setting routing for tablet device');
        router.resetConfig(tablet_routes);
      } else {
        console.log('Setting routing for desktop device');
      }
    }
}
