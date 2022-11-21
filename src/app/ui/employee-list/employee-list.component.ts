import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PersonModel } from 'src/app/model/person.model';
import { EmployeesService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnDestroy {
  private _removeSubscription: Subscription | undefined;

  constructor(private _employeesService: EmployeesService) {}

  data$: Observable<PersonModel[] | null> = this._employeesService.getAll();

  onRemove(id: string) {
    this._removeSubscription = this._employeesService.delete(id).subscribe();
  }

  ngOnDestroy(): void {
    this._removeSubscription?.unsubscribe();
  }
}
