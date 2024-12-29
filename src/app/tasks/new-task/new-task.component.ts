import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() createNewTask = new EventEmitter<NewTask>();

  entertedTitle='';
  entertedSummary='';
  entertedDueDate='';

  onCancelTaskCreation(){
    this.cancel.emit();
  }

  onSubmit(){
    this.createNewTask.emit({title: this.entertedTitle, summary: this.entertedSummary, dueDate: this.entertedDueDate})
  }

}
