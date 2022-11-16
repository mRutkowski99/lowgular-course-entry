import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/model/project.model';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  constructor(private _projectService: ProjectService) {}

  data$: Observable<ProjectModel[] | null> = this._projectService.getAll();
}
