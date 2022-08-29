import { InMemoryDbService } from "angular-in-memory-web-api";

export class Dataservice implements InMemoryDbService{
    createDb() {
        return {
            employees:[
              {Sr:1,firstname:'John',middlename:'jerry',lastname:'jack', Emailid:'john@gmail.com',Dob:'20-jan-2000',add1:'USA',ContactNo:1234567890},
              {Sr:2,firstname:'Mary',middlename:'andrew',lastname:'hack', Emailid:'Mary@gmail.com',Dob:'25-feb-2002',add1:'USA',ContactNo:2345678901},
              {Sr:3,firstname:'priya',middlename:'bheem',lastname:'mack',Emailid:'Priya@gmail.com',Dob:'23-mar-2004',add1:'USA',ContactNo:4356712890},
              {Sr:4,firstname:'raju',middlename:'ram',lastname:'rack',Emailid:'raju@gmail.com',Dob:'21-apr-2005',add1:'USA',ContactNo:2222266666},
              {Sr:5,firstname:'pinky',middlename:'shyam',lastname:'pack',Emailid:'pinky@gmail.com',Dob:'22-jun-2003',add1:'USA',ContactNo:1212121212}
              ]
    }
}
}