import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();

  entertedTitle='';
  entertedSummary='';
  entertedDueDate='';

  private taskService = inject(TaskService)

  onCancelTaskCreation(){
    this.close.emit();
  }

  onSubmit(){
    //this.createNewTask.emit({title: this.entertedTitle, summary: this.entertedSummary, dueDate: this.entertedDueDate})
    this.taskService.createNewTask({title: this.entertedTitle, summary: this.entertedSummary, dueDate: this.entertedDueDate}, this.userId);
    this.close.emit();
  }

}
