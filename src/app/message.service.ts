import { Injectable } from '@angular/core';
import { Message } from './messages/message';
import { Observable, of } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }

  add(newMessage: string): void{
    this.messages.push(newMessage);
  }

  clear(){
    this.messages = [];
  }

  log(message: string): void{
    console.log(message);
    this.add(`TransactionService: ${message}`);
  }

  handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
