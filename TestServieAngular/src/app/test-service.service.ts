import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private _url:string = "https://reqres.in/api/users?page=2";

  constructor(private httpClient:HttpClient) { }

  getData(): Observable<Object>{
    return this.httpClient.get<Object>(this._url);
  }
}
