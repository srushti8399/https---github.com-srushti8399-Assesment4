import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"employee",component:EmployeeComponent},
  {path:"create",component:CreateEmployeeComponent},
  {path:"",redirectTo:"employee",pathMatch:'full'},
  {path:"**",component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
