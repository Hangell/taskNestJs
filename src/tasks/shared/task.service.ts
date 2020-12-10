import { Injectable } from '@nestjs/common';
import { Task } from "./task";

@Injectable()
export class TaskService {
  tasks: Task[] = [
    {id: 1, description: 'Tarefa um', completed: true},
    {id: 2, description: 'Tarefa dois', completed: true},
    {id: 3, description: 'Tarefa tres', completed: false},
    {id: 4, description: 'Tarefa quatro', completed: true},
    {id: 5, description: 'Tarefa cinco', completed: false},
    {id: 6, description: 'Tarefa seis', completed: false},
    {id: 7, description: 'Tarefa sete', completed: false},
    {id: 8, description: 'Tarefa oito', completed: true},
    {id: 9, description: 'Tarefa nove', completed: false},
    {id: 10, description: 'Tarefa dez', completed: true}
  ];

  getAll(){
    return this.tasks;
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  create(task: Task){
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }
    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  update(task: Task){
    const taskArray = this.getById(task.id);
    if(taskArray){
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }
    return taskArray;
  }

  delete(id: number){
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.slice(index, 1);
  }
}
