import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from 'src/app/model/person.model';
import { EmployeesService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'employees-faces',
  templateUrl: './employee-faces.component.html',
  styleUrls: ['./employee-faces.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFacesComponent {
  constructor(private _employeesService: EmployeesService) {}

  data$: Observable<PersonModel[] | null> = this._employeesService.getAll();
}
