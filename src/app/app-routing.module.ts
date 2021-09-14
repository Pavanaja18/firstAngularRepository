import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import {AboutUsComponent} from './about-us/about-us.component';
const routes: Routes = [
  
  {path:"Home",component:HomeComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Login",component:LoginComponent},
  {path:"Contactus", component:ContactusComponent},
  {path:"AboutUS",component:AboutUsComponent},
  {path:"users",component:UsersComponent},
  {path:"users/:id",component:UserDetailsComponent}
  ,
  {path:'',redirectTo:'/Home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
