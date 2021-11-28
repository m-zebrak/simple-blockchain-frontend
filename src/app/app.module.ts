import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BlockchainService} from "./services/blockchain.service";
import {TopBarComponent} from './top-bar/top-bar.component';
import {BlockchainViewerComponent} from './blockchain-viewer/blockchain-viewer.component';
import {BlockViewComponent} from './block-view/block-view.component';
import {TransactionsTableComponent} from './transactions-table/transactions-table.component';
import {SettingsComponent} from './settings/settings.component';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BlockchainViewerComponent,
    BlockViewComponent,
    TransactionsTableComponent,
    SettingsComponent,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BlockchainService, BlockchainViewerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
