import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { HttpClient } from '@angular/common/http';
import { LocationsComponent } from '../locations/locations.component';
import { LanesComponent } from '../lanes/lanes.component';
import { LaneTypesComponent } from '../lane-types/lane-types.component';
import { TransactionsFilterComponent } from '../transactions-filter/transactions-filter.component';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.css']
})
export class ExportExcelComponent implements OnInit {

  constructor(private transactionService: TransactionService, private httpClient: HttpClient) { }

  getTransactionsReportInExcel(): void{
    this.transactionService.getGetParamExt(LocationsComponent.selectedLocationID, LanesComponent.selectedLaneID, LaneTypesComponent.selectedLaneTypeID, TransactionsFilterComponent.fromDate, TransactionsFilterComponent.toDate);
    window.location.href='http://localhost:8080/exportXlsx'+this.transactionService.getParamExt;
  }

  ngOnInit() {
  }

}
