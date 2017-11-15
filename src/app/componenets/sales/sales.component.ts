import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private salesService: SalesService) {
   
  }
  sales: Array<any>;

  ngOnInit() {
    this.sales = this.salesService.sales;
  }

}
