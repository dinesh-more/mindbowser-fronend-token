import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ManagerSignupComponent } from './manager-signup/manager-signup.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: ManagerLoginComponent },
  { path: 'signup', component: ManagerSignupComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'update-employee/:empid', component: UpdateEmployeeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
