import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!:string;
  isAddingTask = false;

  constructor(private taskService: TaskService){
  }
  
  get selectedUserTask(){
    return this.taskService.getSelectedUserTask(this.userId);
  }

  onStartAddTask(){
   this.isAddingTask = true;
  }

  OncloseAddTask(){
    this.isAddingTask = false;
  }

}
