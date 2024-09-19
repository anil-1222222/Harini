import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Car } from '../authentication/car';
import { CarUserServiceService } from '../services/car-user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class AdminpageComponent implements OnInit{
  searchText="";
  cars! :Car[];
  updatecar!:Car;
  isAvailable='';
  constructor(private carService:CarUserServiceService,private router: Router,private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((med)=>{
      this.cars = med;;
    });
  }

  deleteCar(carId:number){
   this.carService.deleteCar(carId).subscribe();
   Swal.fire('Item Will be Removed From Cart !!');
    return location.reload();
  }

  checkCheckBoxvalue(event: Event,id:number,carName:string,carModel:number,carPrice:number,carPic:string):void {
    const inputElement=event.target as HTMLInputElement;
   if(inputElement.checked){
    this.carService.updateCarBaesdOnAvailible("checked",id,carName,carModel,carPrice,carPic).subscribe((reg)=>{
      this.updatecar=reg;
    })
   }
   else{
    this.carService.updateCarBaesdOnAvailible("Unchecked",id,carName,carModel,carPrice,carPic).subscribe((reg)=>{
      this.updatecar=reg;
    })
   }
  }

  // loadData(){
  //   this.carService.getCarsBAvailable().subscribe((car)=>{
  //     this.cars = car;
  //   });
  // }

}
