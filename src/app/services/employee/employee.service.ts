import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/model/employee.model';

@Injectable()
export class EmployeesService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this._http.get<EmployeeModel[]>('assets/data/employees.json');
  }
}
