import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {

  public taskForm : FormGroup ;
  public res : any ; 

  constructor(
    private formBuilder : FormBuilder,
    private taskService : TaskService

  ) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title : ['', Validators.required]
    });
  }

  onSubmit() {
    this.res = {
      'title' : this.taskForm.value.title 
    }
    this.taskService.createTask(this.res).subscribe() ;
  }

}