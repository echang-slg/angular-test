export type Task = {
  id: number;
  userId: number;
  title: string;
  summary: string;
  completed: boolean;
  dueDate?: string;
  createdAt?: Date;
  completeDate?: Date;
};

export type NewTask = {
  title: string;
  summary: string;
  dueDate?: string;
}
