import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.css']
})
export class TransactionsFilterComponent implements OnInit {

  constructor() { }
  title_filter='Report Filtering';
  title_export='Export Report Data';
  ngOnInit() {
  }

}
