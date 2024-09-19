import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './authentication/car';

@Pipe({
  name: 'searchCar'
})
export class SearchCarPipe implements PipeTransform {

  transform(cars: Car[], searchText: string){
    
    if(!cars || !searchText){
      return cars;
    }
    return cars.filter(cars=>cars.carName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}
