import { Injectable } from '@angular/core';
import { Lane } from './lanes/lane';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Message } from './messages/message';

@Injectable({
  providedIn: 'root'
})
export class LaneService {

  private FilteredLanes = new BehaviorSubject(this.getLanes());
  private QueryString: string;
  currentFilteredLanes = this.FilteredLanes.asObservable();

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }
   
   getLanes(LaneTypeID: number=0): Observable<Lane[]>{
    this.QueryString='';
    this.QueryString += '?LaneTypeID='+LaneTypeID;

    return this.httpClient.get<Lane[]>('http://localhost:8080/getLanes'+this.QueryString).pipe(tap(_ => this.messageService.log('getLanes(): fetched lanes')), catchError(this.messageService.handleError('getTransactions', [])));
   }

   setLanes(lanes: Observable<Lane[]>){
     this.FilteredLanes.next(lanes);
   }

}
