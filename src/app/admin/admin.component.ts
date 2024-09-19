import { Component, OnInit } from '@angular/core';
import { AdminAuthenticationStatus } from '../authentication/AdminAuthenticationStatus';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{


  adminauthentication : AdminAuthenticationStatus |undefined;
  constructor(
  private adminService: AdminService,
  private router: Router,
  private route: ActivatedRoute
  ){}
  ngOnInit(): void {}
  OnData(form: NgForm) {
    console.log(form.value.username, form.value.password);

    this.adminService
    .authenticate(form.value.username, form.value.password)
    .subscribe((res) => {
      this.adminauthentication = res;
      if (this.adminauthentication.adminAuthenticated) {
        Swal.fire('Log-In Suceessful !!','Welcom Back', 'success' );
        //alert("Successfully logged in!")
        this.router.navigate(['/adminpage'], { relativeTo: this.route});
      }
      else {
        //alert("Invalid Credentials")
        Swal.fire({
          icon: 'error',
          title: 'Hello Sir/Madam...',
          text: 'Invalid Credentials - Try Again',
        })
        //this.router.navigate(['/adminpage'], { relativeTo: this.route});
        this.router.navigate(['/admin'], {relativeTo: this.route});
        form.reset();
}
});
}

}
