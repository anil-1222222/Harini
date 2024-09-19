import { Component } from '@angular/core';
import { Car } from '../../authentication/car';
import { CarUserServiceService } from '../../services/car-user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css'
})
export class UpdateCarComponent {
  updatecar!:Car;
  constructor(private userservice:CarUserServiceService,
    private router: Router,private route:ActivatedRoute
    ) { }
    ngOnInit(): void {
      const carId: number = this.route.snapshot.params['carId'];
      this.userservice.getCar(carId).subscribe((res) => {
        this.updatecar = res;
      });
    }
  
    onSubmit(form: any){
      this.userservice.updateCar(form.value.carId,form.value.carName,form.value.carModel,form.value.carPrice,form.value.carPic).subscribe((reg)  => {
       this.updatecar = reg;
       return this.router.navigate(['adminpage'], { relativeTo: this.route});
      })
      Swal.fire('Item Will be Updated!!');
}

}
