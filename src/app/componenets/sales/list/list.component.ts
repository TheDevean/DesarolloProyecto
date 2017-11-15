import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  sales : Array<any>;

  constructor( private salesService:SalesService ) {

  }

  ngOnInit() {
    this.sales = this.salesService.sales;
  }

}
