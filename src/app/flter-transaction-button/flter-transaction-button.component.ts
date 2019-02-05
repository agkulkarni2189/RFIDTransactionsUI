import { Component, OnInit } from '@angular/core';
import { LocationsComponent } from '../locations/locations.component';
import { LanesComponent } from '../lanes/lanes.component';
import { LaneTypesComponent } from '../lane-types/lane-types.component';
import { TransactionService } from '../transaction.service';
import { TransactionsComponent } from '../transactions/transactions.component';
import { TransactionsFilterComponent } from '../transactions-filter/transactions-filter.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-flter-transaction-button',
  templateUrl: './flter-transaction-button.component.html',
  styleUrls: ['./flter-transaction-button.component.css']
})
export class FlterTransactionButtonComponent implements OnInit {

  constructor(private transactionService: TransactionService, private transactionsComponent: TransactionsComponent) { }

  getFilteredTransactions(): void{
    this.transactionService.getFilteredTransactions('http://localhost:8080/exportJSON', LocationsComponent.selectedLocationID, LanesComponent.selectedLaneID, LaneTypesComponent.selectedLaneTypeID, TransactionsFilterComponent.fromDate, TransactionsFilterComponent.toDate).subscribe(transactions => this.transactionService.setFilteredTransactions(of(transactions)));
  }

  ngOnInit() {
    this.getFilteredTransactions();
  }

}
