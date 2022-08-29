import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_model/user.model';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:44303/';
  currentUserSource = new ReplaySubject<User | any>(1);
  currentUser$ = this.currentUserSource.asObservable();
  username!: any;

  constructor(private http: HttpClient) {}

  login(model: User) {
    console.log(model);

    return this.http
      .post<User>(this.baseUrl + 'api/Authentication/Login', model)
      .pipe(
        map((User: User) => {
          const user = User;
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