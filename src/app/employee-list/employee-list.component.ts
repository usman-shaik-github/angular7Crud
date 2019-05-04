import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employeeList=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {

    this.employeeService.getEmployees().subscribe(data => {

this.employeeList=data;
      console.log(JSON.stringify(data));
    })
  }

}
