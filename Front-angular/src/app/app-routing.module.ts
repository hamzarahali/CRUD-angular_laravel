import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskaddComponent } from './components/taskadd/taskadd.component';



const routes: Routes = [
  { path : '' , component : TasklistComponent },
  { path : 'addtask' , component : TaskaddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
