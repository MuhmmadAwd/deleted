import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../_model/order';
import { ApiService } from './_api.service';

@Injectable({
  providedIn: 'root',
})
export class AdminArchivedOrdersService extends ApiService<Order> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getApiUrl(): string {
    return "DisplayOrders/AdminArchivedOrders";
  }

  Orders(order: Order) {
    return this.post(order)
  }
}
