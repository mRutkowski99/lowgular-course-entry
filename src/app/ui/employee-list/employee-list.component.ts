import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from 'src/app/model/person.model';
import { EmployeesService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeesService: EmployeesService) {}

  data$: Observable<PersonModel[] | null> = this._employeesService.getAll();
}
