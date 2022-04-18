import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
{
  path:"",component:RegComponent
},
{
  path:"reg",component:RegComponent
},
{
  path:"logout",component:LogoutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
