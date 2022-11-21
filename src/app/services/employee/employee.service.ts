import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EmployeeCreateModel } from 'src/app/model/employee-create.model';
import { PersonModel } from 'src/app/model/person.model';

@Injectable()
export class EmployeesService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<PersonModel[]> {
    return this._http.get<PersonModel[]>('assets/data/people.json');
  }

  create(employee: EmployeeCreateModel): Observable<void> {
    return this._http
      .post('https://dummy.restapiexample.com/api/v1/create', employee)
      .pipe(map((resp) => void 0));
  }
}
