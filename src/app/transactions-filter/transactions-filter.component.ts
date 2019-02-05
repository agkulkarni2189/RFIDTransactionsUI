import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.css']
})
export class TransactionsFilterComponent implements OnInit {
  static fromDate: string=null;
  static toDate: string=null;
  constructor() { }
  title_filter='Report Filtering';
  title_export='Export Report Data';

  ngOnInit() {
  }

  onChangeFromDate(fromDate: string=null): void{
    if(fromDate != null)
    {
      TransactionsFilterComponent.fromDate = fromDate;
      console.log('From creation time: '+TransactionsFilterComponent.fromDate);
    }
    else
      TransactionsFilterComponent.fromDate=null;
  }
  
   onChangeToDate(toDate: string=null): void{
    if(toDate != null)
    {
      TransactionsFilterComponent.toDate = toDate;
      console.log('To creation time:'+TransactionsFilterComponent.toDate);
    }
    else
      TransactionsFilterComponent.toDate=null;
  }
}
