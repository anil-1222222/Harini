import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarUserServiceService } from '../../../../services/car-user-service.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Car } from '../../../../authentication/car';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
  car!:Car;
  constructor(
    private activatedRoute: ActivatedRoute,private route:Router,private carService : CarUserServiceService) { }

  ngOnInit(): void {
    const carId:number = this.activatedRoute.snapshot.params['carId'];
      this.carService.getCar(carId).subscribe((res)=>{this.car=res})
  }

  back(){
    return this.route.navigate(['/userpage'], { relativeTo: this.activatedRoute});
  }
  onSubmit(form: NgForm){
    Swal.fire('Your Booking Successfully, Car Will Arrive near You, Please Go And Pickup the Car');
    return this.route.navigate(['/userpage'], { relativeTo: this.activatedRoute});
  }

}
