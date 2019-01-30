import { Injectable } from '@angular/core';
import { Transaction } from './transactions/transaction';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Message } from './messages/message';
import { Lane } from './lanes/lane';
import { LaneType } from './lane-types/lane-type';
import { Location } from './locations/location';
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getParamExt: string;
  dataUrl: string;

  getFilteredTransactions(selectedLocationID: number=0, selectedLaneID: number=0, selectedLaneTypeID: number=0): Observable<Transaction[]>{
    this.dataUrl = 'http://localhost:8080/exportJSON';
    this.getParamExt = '';

    if(selectedLocationID > 0)
    {
      if(this.getParamExt.length <= 0)
        this.getParamExt += "?LocationID="+selectedLocationID;
      else
        this.getParamExt += "&LocationID="+selectedLocationID;
    }

    if(selectedLaneID > 0)
    {
      if(this.getParamExt.length <= 0)
        this.getParamExt += "?LaneID="+selectedLaneID;
      else
        this.getParamExt += "&LaneID="+selectedLaneID;
    }

    if(selectedLaneTypeID > 0)
    {
      if(this.getParamExt.length <= 0)
        this.getParamExt += "?LaneTypeID="+selectedLaneTypeID;
      else
        this.getParamExt += "&LaneTypeID="+selectedLaneTypeID;
    }

    if(this.getParamExt.length > 0)
      this.dataUrl += this.getParamExt;

    return this.httpClient.get<Transaction[]>(this.dataUrl).pipe(tap(_ => this.messageService.log('getFilteredTransactions(): fetched transactions')), catchError(this.messageService.handleError('getFilteredTransactions', [])));
  }
}
