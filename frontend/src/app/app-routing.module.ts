import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  {path:'',redirectTo:'lists',pathMatch:'full'},
  {path:'new-list',component:NewListComponent},
  {path:'edit-list/:listId',component:EditListComponent},
  {path:'login',component:LoginPageComponent},
  {path:'signup',component:SignupPageComponent},
  {path:'lists',component:TaskviewComponent},
  {path:'lists/:listId',component:TaskviewComponent},
  {path:'lists/:listId/new-task',component:NewTaskComponent},
  {path:'lists/:listId/edit-task/:taskId',component:EditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
