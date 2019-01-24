import { Injectable } from '@angular/core';
import { LaneType } from './lane-types/lane-type';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Message } from './messages/message';

@Injectable({
  providedIn: 'root'
})
export class LaneTypeService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getLaneTypes(): Observable<LaneType[]>{
    return this.httpClient.get<LaneType[]>('http://localhost:8080/getLaneTypes').pipe(tap(_ => this.messageService.log('getLaneTypes(): fetched lanes')), catchError(this.messageService.handleError('getLaneTypes', [])));
  }
}
