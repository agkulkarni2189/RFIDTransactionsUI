import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { LocationsComponent } from '../locations/locations.component';
import { LaneTypesComponent } from '../lane-types/lane-types.component';
import { LanesComponent } from '../lanes/lanes.component';
import { TransactionsFilterComponent } from '../transactions-filter/transactions-filter.component';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-export-pdf',
  templateUrl: './export-pdf.component.html',
  styleUrls: ['./export-pdf.component.css']
})
export class ExportPdfComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  getReportPdf(): void{
    this.transactionService.getGetParamExt(LocationsComponent.selectedLocationID, LanesComponent.selectedLaneID, LaneTypesComponent.selectedLaneTypeID, TransactionsFilterComponent.fromDate, TransactionsFilterComponent.toDate);
    window.location.href='http://localhost:8080/exportPdf'+this.transactionService.getParamExt;
  }
  ngOnInit() {
  }

}
