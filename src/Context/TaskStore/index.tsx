import { create } from 'zustand';

type Task = {
  created: number;
  completed: number;
  tasks: Array<TaskType>;
};

type TaskType = {
  id: number;
  text: string;
  completed: boolean;
};

export const useTask = create<Task>(set => ({
  created: 0,
  completed: 0,
  tasks: [{ id: 1, text: 'Lucas Ivisson de Farias Santos', completed: true }],
  addTask: (task: TaskType) =>
    set(state => ({
      tasks: [...state.tasks, task],
      created: state.created + 1,
    })),
  checkTask: (id: number) => {
    let isCompleted = 0;
    set(state => ({
      tasks: state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
          if (task.completed) {
            isCompleted = 1;
          }
        }
        return task;
      }),
      completed: state.completed + isCompleted,
    }));
  },
  removeTask: (id: number) => {
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    }));
  },
}));
