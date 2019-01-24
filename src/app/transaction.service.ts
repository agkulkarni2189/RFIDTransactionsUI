import { Injectable } from '@angular/core';
import { Transaction } from './transactions/transaction';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Message } from './messages/message';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getTransactions(): Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>('http://localhost:8080/exportJSON').pipe(tap(_ => this.messageService.log('fetched transactions')), catchError(this.messageService.handleError('getTransactions', [])));
  }
}
