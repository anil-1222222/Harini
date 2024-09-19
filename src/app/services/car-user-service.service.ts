import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../authentication/car';

@Injectable({
  providedIn: 'root'
})
export class CarUserServiceService {

  constructor(private httpClient:HttpClient ) { }

  getCars():Observable<any>{
    return this.httpClient.get<any[]>('http://localhost:8080/car/fetch');
}
getCarsBAvailable():Observable<any>{
  return this.httpClient.get<any[]>('http://localhost:8080/car/fba');
}
getCar(carId:number):Observable<Car>{
  return this.httpClient.get<Car>(`http://localhost:8080/car/car/${carId}`);
}

addCar(
  carName:string,
	carModel:number,
	rentPrice:number,
  carPic:string
): Observable<Car>{
  let body={
    carName:carName,
    carModel:carModel,
    rentPrice:rentPrice,
    carPic:carPic
  };
  let headers = new HttpHeaders({
      'content-type': 'application/json',
  });
  return this.httpClient.post<Car>(
      'http://localhost:8080/car/register',
      body,
      {
          headers: headers,
      }
  );
}
updateCar(
  carId:number,
  carName:string,
	carModel:number,
	rentPrice:number,
  carPic:string
): Observable<Car>{
  let body={
    carId:carId,
    carName:carName,
    carModel:carModel,
    rentPrice:rentPrice,
    carPic:carPic
  };
  let headers = new HttpHeaders({
      'content-type': 'application/json',
  });
  return this.httpClient.post<Car>(
      'http://localhost:8080/car/update',
      body,
      {
          headers: headers,
      }
  );
}
updateCarBaesdOnAvailible(
  isAvailable:string,id:number,carName:string,carModel:number,carPrice:number,carPic:string
): Observable<Car>{
  let body={
    carId:id,
    isAvailable:isAvailable,
    carName:carName,
    carModel:carModel,
    rentPrice:carPrice,
    carPic:carPic
  };
  let headers = new HttpHeaders({
      'content-type': 'application/json',
  });
  return this.httpClient.post<Car>(
      'http://localhost:8080/car/update',
      body,
      {
          headers: headers,
      }
  );
}

 deleteCar(carId: number):Observable<Car[]>{
        //console.log(medicineId)
        return this.httpClient.delete<Car[]>(`http://localhost:8080/car/delete/${carId}`);
    }

    getCarNames():Observable<any>{
      return this.httpClient.get<any[]>('http://localhost:8080/car/carNames');
  }
  is:string="checked";
  getCarsByName(name:string):Observable<any>{
    return this.httpClient.get<any[]>(`http://localhost:8080/car/fetch1/${name}`);
}
}
