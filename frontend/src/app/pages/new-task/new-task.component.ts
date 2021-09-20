import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Task} from 'src/app/models/taskmodel'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId!:string;

  constructor(private taskService:TaskService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.listId=params['listId'];
        // console.log(this.listId);
      });
  }

  toParent(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  createTask(title:string){
    this.taskService.createTask(title,this.listId).subscribe((newTask: Task|any)=>{
        // console.log(newTask);
        this.router.navigate(['../'],{relativeTo:this.route});
    });
  }

}
