import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  public clientForm : FormGroup ;
  public res : any ; 

  constructor(
    private formBuilder : FormBuilder,

  ) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  onSubmit() {
    this.res = {
      'username' : this.clientForm.value.username , 
      'password' : this.clientForm.value.password
    }
    
  }

}
