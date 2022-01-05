import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddtobagngComponent } from './components/addtobagng/addtobagng.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'Home.html',component:HomeComponent
  },
  {
    path:'about.html',component:AboutComponent
  },
  {
    path:'Product.html',component:ProductComponent
  },
  {
    path:'AllProducts.html',component:ProductsComponent
  },
  {
    path:'faqs.html',component:FaqsComponent
  },

  {
    path:'addtobag.html',component:AddtobagngComponent
  },

  {
    path:'profile.html',component:ProfileComponent
  },
  {
    path:'Login.html',component:LoginComponent
  },
  {
    path:'Signup.html',component:SigninComponent
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
