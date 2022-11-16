import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from 'src/app/model/person.model';

@Injectable()
export class EmployeesService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<PersonModel[]> {
    return this._http.get<PersonModel[]>('assets/data/people.json');
  }
}
