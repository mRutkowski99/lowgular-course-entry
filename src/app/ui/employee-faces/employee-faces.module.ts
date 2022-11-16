import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeFacesComponent } from './employee-faces.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeFacesComponent],
  exports: [EmployeeFacesComponent],
})
export class EmployeeFacesComponentModule {}
