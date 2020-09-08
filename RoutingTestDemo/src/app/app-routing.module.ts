import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/dept',pathMatch:'full'},
  //{path:'',redirectTo:'/dept',pathMatch:'prefix'},
  //{path:  '',    component:DeptListComponent},
  {path: 'dept', component:DeptListComponent},
  {path: 'dept/:id', component:DeptDetailsComponent},
  {path: 'empl', component:EmpListComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComps = [DeptListComponent,EmpListComponent,PageNotFoundComponent,DeptDetailsComponent]
