import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/model/project.model';

@Injectable()
export class ProjectService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ProjectModel[]> {
    return this._http.get<ProjectModel[]>('assets/data/projects.json');
  }
}
