import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private _url:string = "https://reqres.in/api/users?page=2";

  constructor(private httpClient:HttpClient) { }

  getData(): Observable<Object>{
    return this.httpClient.get<Object>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
