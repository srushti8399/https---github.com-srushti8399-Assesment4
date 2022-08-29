import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  emptype = new FormControl('');

  emptypeList: string[] = ['Permanent','Contractual'];
    employeeForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm=this.fb.group(
      {firstname:['',Validators.required],
      middlename:[''],
      lastname:['',Validators.required],
      emailid:[''],
      dob:[''],
      contactno:['',[Validators.required,Validators.maxLength(10)]],
      gender:[''],
      address:['',Validators.required],
      pincode:['',[Validators.required,Validators.maxLength(6)]],
      emptype:[''],


      }
    )
    
  }
  submit(){
    console.log(this.employeeForm);

  }

}
