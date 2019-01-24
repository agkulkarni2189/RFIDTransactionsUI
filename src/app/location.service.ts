import { Injectable } from '@angular/core';
import { Location } from './locations/location';
import { MessageService } from './message.service'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Message } from './messages/message';
import {catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient, private messageService: MessageService) {
   }

   getLocations(): Observable<Location[]>{
     return this.httpClient.get<Location[]>('http://localhost:8080/getLocations').pipe(tap(_ => this.messageService.log('getLocations(): fetched locations')), catchError(this.messageService.handleError('getLocations', [])));
   }
}
