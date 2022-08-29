import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    EmployeeComponent,CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  exports:[EmployeeComponent,
  CreateEmployeeComponent]
})
export class EmployeeModule { }
