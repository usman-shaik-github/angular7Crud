import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private url:string="/assets/data/employee.json";

  constructor(private http:HttpClient) {

  }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
}
