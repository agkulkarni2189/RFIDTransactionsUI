import { Component, OnInit, Injectable, SimpleChanges } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from '../transaction.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  constructor(private transactionService: TransactionService) { }

  getTransactions(): void{
    this.transactionService.getFilteredTransactions().subscribe(trans => this.transactions=trans);
  }

  ngOnInit() {
    this.getTransactions();
  }

}
