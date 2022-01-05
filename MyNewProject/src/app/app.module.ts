import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AddtobagngComponent } from './components/addtobagng/addtobagng.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ProfileComponent,
    ProductsComponent,
    LoginComponent,
    SigninComponent,
    FaqsComponent,
    AddtobagngComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
