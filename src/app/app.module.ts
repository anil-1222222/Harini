import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { RegisterPageComponent } from './user/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserpageComponent } from './user/userpage/userpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CantactusComponent } from './cantactus/cantactus.component';
import { CartComponent } from './user/userpage/cart/cart.component';
import { BillingComponent } from './user/userpage/cart/billing/billing.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddCarComponent } from './adminpage/add-car/add-car.component';
import { UpdateCarComponent } from './adminpage/update-car/update-car.component';
import { ViewCantactUsComponent } from './view-cantact-us/view-cantact-us.component';
import { SearchCarPipe } from './search-car.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    RegisterPageComponent,
    UserpageComponent,
    AboutusComponent,
    CantactusComponent,
    CartComponent,
    BillingComponent,
    AdminComponent,
    AdminpageComponent,
    AddCarComponent,
    UpdateCarComponent,
    ViewCantactUsComponent,
    SearchCarPipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
