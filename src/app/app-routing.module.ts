import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [{ path: '', redirectTo: '/transactions', pathMatch: 'full' },
                        {path: 'messages', component: MessagesComponent },
                        { path: 'transactions', component: TransactionsComponent },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
