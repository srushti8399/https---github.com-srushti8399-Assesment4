import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../Models/Employee.interface';
import { EmployeeServices } from '../Services/EmployeeService';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Iemployee[]= [];
  displayedColumns: string[] = ['Sn','Fullname','Emailid','Dob','Contactno','Address'];

  constructor(private _empservices:EmployeeServices) { }

  ngOnInit(): void {
    this._empservices.getEmployeeByApi().subscribe((empdata)=>{
      this.employees= empdata;
      
  })
  }

}
