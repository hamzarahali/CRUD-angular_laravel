import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddclientComponent } from './components/addclient/addclient.component';
import { ListclientComponent } from './components/listclient/listclient.component';


const routes: Routes = [
  { path : '' , component : ListclientComponent },
  { path : 'addclient' , component : AddclientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
