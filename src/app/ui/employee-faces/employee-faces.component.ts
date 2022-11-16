import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/model/employee.model';

@Component({
  selector: 'employees-faces',
  templateUrl: './employee-faces.component.html',
  styleUrls: ['./employee-faces.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFacesComponent {
  constructor(private _http: HttpClient) {}

  data$: Observable<EmployeeModel[] | null> = this._http.get<EmployeeModel[]>(
    'assets/data/employees.json'
  );
}
