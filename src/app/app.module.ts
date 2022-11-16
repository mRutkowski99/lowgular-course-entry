import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesServiceModule } from './services/employee/employee.service-module';
import { ProjectServiceModule } from './services/project/project.service-module';
import { EmployeeFacesComponentModule } from './ui/employee-faces/employee-faces.module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { ProjectListComponentModule } from './ui/project-list/project-list.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeFacesComponentModule,
    EmployeesServiceModule,
    ProjectServiceModule,
    ProjectListComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
