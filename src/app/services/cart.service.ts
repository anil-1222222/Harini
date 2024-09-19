import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../authentication/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient){}

    getCart():Observable<Cart[]>{
        return this.httpClient.get<Cart[]>('http://localhost:8080/cart/carts');
    }

    deleteCart(carId: number):Observable<Cart[]>{
        //console.log(medicineId)
        return this.httpClient.delete<Cart[]>(`http://localhost:8080/cart/cart/${carId}`);
    }
    addCart(carId:number){
        return this.httpClient.get(`http://localhost:8080/cart/cart/${carId}`);
    }
  
}
