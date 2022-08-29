import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iemployee } from "../Models/Employee.interface";

@Injectable()
export class EmployeeServices{
    EmployeeData:string='api/employees';
    constructor(private _http:HttpClient){

    }
    getEmployeeByApi():Observable<Iemployee[]>{
        return this._http.get<Iemployee[]>(this.EmployeeData);
     }

}
