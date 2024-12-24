import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from '../addemp/addemp.component';
import { authGuard } from '../auth.guard';
import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
   {
      path:"",component:HomeComponent,canActivate:[authGuard]
    },
    {
      path:"details/:id",component:DetailsComponent,canActivate:[authGuard]
    },
    {
      path:"addemp",component:AddempComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
