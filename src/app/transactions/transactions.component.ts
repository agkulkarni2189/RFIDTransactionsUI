import { Component, OnInit, Injectable, SimpleChanges, Input } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from '../transaction.service';
import { Observable } from 'rxjs';
import { LocationsComponent } from '../locations/locations.component';
import { LanesComponent } from '../lanes/lanes.component';
import { LaneTypesComponent } from '../lane-types/lane-types.component';
import { TransactionsFilterComponent } from '../transactions-filter/transactions-filter.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  @Input() transactions: Transaction[];
  constructor(private transactionService: TransactionService) { }

  getTransactions(): void{
    this.transactionService.getFilteredTransactions('http://localhost:8080/exportJSON', LocationsComponent.selectedLocationID, LanesComponent.selectedLaneID, LaneTypesComponent.selectedLaneTypeID, TransactionsFilterComponent.fromDate, TransactionsFilterComponent.toDate).subscribe(trans => this.transactions=trans);
  }

  ngOnInit() {
    this.transactionService.currentFilteredTransactions.subscribe(trans => trans.subscribe(trans => this.transactions = trans));
  }

}
