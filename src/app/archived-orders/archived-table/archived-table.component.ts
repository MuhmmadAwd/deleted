import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/_services/admin-archived-orders.service';

@Component({
  selector: 'app-archived-table',
  templateUrl: './archived-table.component.html',
  styleUrls: ['./archived-table.component.css']
})
export class ArchivedTableComponent implements OnInit {
  order!:any;
  endpoint!:any;
  constructor(public _OrdersService:OrdersService) { 
    this.endpoint
  }

  ngOnInit(): void {
  }

  Orders(){
    this._OrdersService.Orders(this.order)
  }

}
