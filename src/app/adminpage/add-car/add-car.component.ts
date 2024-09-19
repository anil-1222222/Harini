import { Component } from '@angular/core';
import { Car } from '../../authentication/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarUserServiceService } from '../../services/car-user-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  addcar : Car| undefined;
  constructor(private userservice:CarUserServiceService,
    private router: Router,private route:ActivatedRoute
    ) { }

    onSubmit(form: any){
      this.userservice.addCar(form.value.carName,form.value.carModel,form.value.rentPrice,form.value.carPic).subscribe((reg)  => {
       this.addcar = reg;
        return this.router.navigate(['adminpage'], { relativeTo: this.route});
      })
      Swal.fire('Item Will be Added!!');
}
}