import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  createTransaction(amount:number):Observable<any>{
         return this.http.get<any>(`http://localhost:8080/payment/createTransaction/${amount}`);
  }
}
