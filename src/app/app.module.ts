import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationsComponent } from './locations/locations.component';
import { LanesComponent } from './lanes/lanes.component';
import { LaneTypesComponent } from './lane-types/lane-types.component';
import { TransactionsFilterComponent } from './transactions-filter/transactions-filter.component';
import { FlterTransactionButtonComponent } from './flter-transaction-button/flter-transaction-button.component';
import { ExportPdfComponent } from './export-pdf/export-pdf.component';
import { ExportExcelComponent } from './export-excel/export-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    MessagesComponent,
    LocationsComponent,
    LanesComponent,
    LaneTypesComponent,
    TransactionsFilterComponent,
    FlterTransactionButtonComponent,
    ExportPdfComponent,
    ExportExcelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
