import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EmployeeCreateModel } from 'src/app/model/employee-create.model';
import { EmployeeResponse } from 'src/app/model/employee-response.model';
import { PersonModel } from 'src/app/model/person.model';
import { ApiResponse } from '../api.response';

@Injectable()
export class EmployeesService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<PersonModel[]> {
    return this._http
      .get<ApiResponse<EmployeeResponse[]>>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map(
          (resp) => <PersonModel[]>resp.data.map((data) => ({
              personalNumber: data.id,
              name: data.employee_name,
              mail: data.employee_name + '@lowgular.io',
              img: data.profile_image,
            }))
        )
      );
  }

  create(employee: EmployeeCreateModel): Observable<void> {
    return this._http
      .post('https://dummy.restapiexample.com/api/v1/create', employee)
      .pipe(map((resp) => void 0));
  }

  delete(id: string): Observable<void> {
    return this._http
      .delete('https://dummy.restapiexample.com/api/v1/delete/' + id)
      .pipe(map(() => void 0));
  }
}
