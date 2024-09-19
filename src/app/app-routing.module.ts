import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { RegisterPageComponent } from './user/register-page/register-page.component';
import { UserpageComponent } from './user/userpage/userpage.component';
import { CantactusComponent } from './cantactus/cantactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './user/userpage/cart/cart.component';
import { BillingComponent } from './user/userpage/cart/billing/billing.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddCarComponent } from './adminpage/add-car/add-car.component';
import { ViewCantactUsComponent } from './view-cantact-us/view-cantact-us.component';
import { UpdateCarComponent } from './adminpage/update-car/update-car.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"home",component:HomeComponent},
  {path:"user",component:UserComponent},
  { path: "", redirectTo: 'user', pathMatch: 'full' },
  {path:"user/register",component:RegisterPageComponent},
  {path:"userpage",component:UserpageComponent},
  {path:"cantact",component:CantactusComponent},
  {path:"about",component:AboutusComponent},
  {path:"cart",component:CartComponent},
  {path:"billing/:carId",component:BillingComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminpage",component:AdminpageComponent},
  {path:"adminpage/addcar",component:AddCarComponent},
  {path:"adminpage/viewcontactus",component:ViewCantactUsComponent},
  {path:"updatecar/:carId",component:UpdateCarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
