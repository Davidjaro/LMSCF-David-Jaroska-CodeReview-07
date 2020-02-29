import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { LocationdetailsComponent } from './locationdetails/locationdetails.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{
	path:"", component: HomePageComponent
},{
  path: 'locations', component: LocationlistComponent
},{
  path: 'shoppingcart', component: ShopcartComponent
},{
  path: 'details/:productId', component: LocationdetailsComponent
},{
  path: 'blog', component: BlogComponent
},{
  path: 'contact', component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
