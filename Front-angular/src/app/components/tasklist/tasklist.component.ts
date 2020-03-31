import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  
  constructor(
    private taskService : TaskService,
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (response : any) => {
        console.log ('response' , response) ;
      }
    )
  }



}
