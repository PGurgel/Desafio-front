import { Component, } from '@angular/core';
import { TAREFAS } from 'src/app/mock-tarefas';

@Component({
  selector: 'spa-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent{
  tarefa = {
    id: 1,
    name: 'Pedro',
    titulo: 'Desenvolver aplicação',
  };

  tarefas = TAREFAS;

}