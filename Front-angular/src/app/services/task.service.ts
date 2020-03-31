import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://127.0.0.1:8000/api/' ;

  constructor(
    private httpClient : HttpClient,
  ) { }

  createTask (body : any) {
    return this.httpClient.post(this.url + 'tasks/', body);
  }

  getTasks () {
    return this.httpClient.get(this.url + 'tasks/' ) ;
  }
}
