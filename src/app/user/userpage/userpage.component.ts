import { Component, OnInit } from '@angular/core';
import { CarUserServiceService } from '../../services/car-user-service.service';
import { Car } from '../../authentication/car';
import Swal from 'sweetalert2';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';


declare var Razorpay: any;
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.css'
})
export class UserpageComponent implements OnInit{
  searchText="";
  selectedOption='';
  cars! :Car[];
  carNames!:any;
  constructor(private carService:CarUserServiceService,private cartService:CartService,private router:Router,private route:ActivatedRoute,private paySer:PaymentService ){
    
  }

  ngOnInit():void {
   this.loadData();
   this.getNames();
}
loadData(){
  this.carService.getCarsBAvailable().subscribe((car)=>{
    this.cars = car;
  });
}
addCart(carId:any){
  Swal.fire('Item added To Cart');
  //alert('Iteam added To Cart');
  this.cartService.addCart(carId).subscribe();
  this.router.navigate(['/userpage'], {skipLocationChange:true});
}

getNames(){
  this.carService.getCarNames().subscribe((carNames)=>{
    this.carNames=carNames;
  })
}

onSelectChange(event:any){
  if(event.target.value=="AllCars"){
    this.carService.getCarsBAvailable().subscribe((car)=>{
      this.cars = car;
    });
  }
  else{
  this.carService.getCarsByName(event.target.value).subscribe((car)=>{
    this.cars = car;
  });
}
}

Pay(id:number,rentPrice:number){
  this.paySer.createTransaction(rentPrice).subscribe(
   (response)=>{
    console.log(response)
    if(response!=null){
     this.openTransactionModel(response);
    }
    else{
     Swal.fire("Server Buzy, Please Try Again Later");
    }
   },
   (error)=>{
     Swal.fire("Payment Failed...");
   }
 );
}
openTransactionModel(response:any){
  let options={
        key_id:response.orderId,
        key:response.key,
        amount:response.amount,
        currency:response.currency,
        name:"ANIL KUMAR N",
        description:"payment of online Booking",
        image:'https://www.bing.com/th?id=OIP.iBvR7avPLAtj8pnU537ARQHaE8&w=176&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        handler:(response:any)=>{
             this.processResponse(response);
        },
        prefill:{
         name:'ANIL KUMAR N',
         email:'anil.18ec001@cambridge.edu.in',
         contact:'6363069552'
        },
        notes:{
         address:'Online Booking'
        },
        theme:{
         color:'green'
        }
     
   };
   var rzp1 = new Razorpay(options);
   rzp1.open();
}
processResponse(resp:any){
 console.log(resp);
}
}