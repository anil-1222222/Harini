import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../../../authentication/cart';
import Swal from 'sweetalert2';
import { PaymentService } from '../../../services/payment.service';
// import Razorpay from 'razorpay';



declare var Razorpay: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  carts:Cart[]|undefined;
  constructor(private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
    private paySer:PaymentService
    ) { }

    ngOnInit(): void {
      this.cartService.getCart().subscribe((cart)=>{
        this.carts = cart;
      });
      
    }
  
    deleteCart(carId: number){
      Swal.fire('Item Will be Removed From Cart !!');
      // alert('Item Will be Removed From Cart !!') ;
      this.cartService.deleteCart(carId).subscribe();
      //this.getCart();
      return location.reload();
  
    }
    getCart() {
      this.cartService.getCart();
    }
  
    payment(){
      Swal.fire('Your Order Placed Succesfully');
      this.router.navigate(['/billing'], {relativeTo: this.route});
    }
    back(){
      this.router.navigate(['/userpage'], {relativeTo: this.route});
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
