import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from "@angular/forms";
import { BsLocaleService, defineLocale } from 'ngx-bootstrap'
import { itLocale } from 'ngx-bootstrap/locale';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm:FormGroup;
  public genderList=[{name:"Male",value:"male"},{name:"Female",value:"female"}];

  public myDateValue=new Date().toLocaleDateString();

  constructor(private fb:FormBuilder,private localeService: BsLocaleService) {
    defineLocale('it', itLocale);

    this.localeService.use('it');

  }

  ngOnInit() {
  this.employeeForm=this.fb.group({
    firstName:[''],
    lastName:[''],
    gender:[''],
    dateOfBirth:this.myDateValue
  })
  }

formatDate(form){
return form.value.dateOfBirth.toLocaleDateString();
}
  // add employee
  saveEmployee(){


    this.employeeForm.controls['dateOfBirth'].setValue(this.formatDate(this.employeeForm));

console.log(this.employeeForm.value)
  }

}
