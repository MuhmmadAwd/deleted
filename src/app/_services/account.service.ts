import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_model/user.model';
import { ApiService } from './_api.service';
@Injectable({
  providedIn: 'root',
})
export class AccountService extends ApiService<User> {

  currentUserSource = new ReplaySubject<User | any>(1);
  currentUser$ = this.currentUserSource.asObservable();
  username!: any;

  constructor(protected http: HttpClient) {
    super(http);
  }
  getApiUrl(): string {
    return 'Authentication/Login';
  }

  login(model: User) {
    console.log(model);
    return this.post(model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
          this.username = user.data.pharmacyInformation.pharmacyName;
        }
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
