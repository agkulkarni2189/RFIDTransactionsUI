import { Injectable } from '@angular/core';
import { Lane } from './lanes/lane';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Message } from './messages/message';

@Injectable({
  providedIn: 'root'
})
export class LaneService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
   
   getLanes(): Observable<Lane[]>{
    return this.httpClient.get<Lane[]>('http://localhost:8080/getLanes').pipe(tap(_ => this.messageService.log('getLanes(): fetched lanes')), catchError(this.messageService.handleError('getTransactions', [])));
   }
}
