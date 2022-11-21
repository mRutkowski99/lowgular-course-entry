import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { EmployeeFormModel } from 'src/app/model/employee-form.model';
import { EmployeesService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnDestroy {
  private _createSubscription: Subscription | undefined;

  readonly employeeForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  employee$: Observable<EmployeeFormModel> = this.employeeForm.valueChanges;

  constructor(private readonly _employeeService: EmployeesService) {}

  onSubmit(employee: EmployeeFormModel) {
    // alert(
    //   `User was successfully added to thedatabase. Email: ${employee.email}, Age: ${employee.age}, Salary: ${employee.salary}`
    // );

    this._createSubscription = this._employeeService
      .create(employee)
      .subscribe();
  }

  ngOnDestroy(): void {
    this._createSubscription?.unsubscribe();
  }
}
