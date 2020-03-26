import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path : '' , 
    component : AppComponent , 
    children : [
      { path: 'addproduct',loadChildren:() => import('./components/addproduct/addproduct.module').then(m => m.AddproductModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
