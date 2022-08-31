import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService<T> {
  ApiEndPoint!: string ;
  APIUrl = environment.APIUrl
  private readonly Token = environment.Token;
  constructor(protected httpClient: HttpClient) {}

  getList(page: number, count: number): Observable<T[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('count', count.toString());

    return this.httpClient
      .get<T[]>(`${this.APIUrl}?${params.toString()}`)
      .pipe(catchError(this.handleError));
  }

  get(id: string | number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.APIUrl}/${id}`, {
        headers: new HttpHeaders({
          Authorization: ` Bearer ${this.Token}`,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  post(obj: T): Observable<any> {
    return this.httpClient
      .post(`${this.APIUrl}${this.ApiEndPoint}`, obj, {
        headers: new HttpHeaders({
          Authorization: ` Bearer ${this.Token}`,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  delete(id: string | number): Observable<any> {
    return this.httpClient
      .delete(`${this.APIUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(Api: T) {
    return this.httpClient
      .put(`${this.APIUrl}`, Api)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError(() => new Error('Something wrong happened'));
  }
}
