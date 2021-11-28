import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlockchainViewerComponent} from "./blockchain-viewer/blockchain-viewer.component";
import {SettingsComponent} from "./settings/settings.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path: '', component: BlockchainViewerComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
