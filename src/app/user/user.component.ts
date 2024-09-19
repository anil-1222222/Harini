import { Component } from '@angular/core';
import { Authentication } from '../authentication/authentication';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  authStatus: Authentication | undefined;
  constructor(
    private userservice:UserServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  FormData(form:NgForm){
    this.userservice
    .authenticate(form.value.email, form.value.pass)
    .subscribe((res) => {
      this.authStatus = res;
      if (this.authStatus.authenticated) {
        //alert("Successfully logged in!")
        Swal.fire('Log-In Suceessful !!');
        this.router.navigate(['/userpage'], {relativeTo: this.route});
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Arey...',
          text: 'Invalid Credentials - Try Again',
        })
       // alert("Invalid Credentials!")
        this.router.navigate(['/user'], { relativeTo: this.route});
        form.reset();
      }
    });
}

  }

