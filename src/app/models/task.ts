export type Task = {
  id: number;
  userId: number;
  title: string;
  summary: string;
  completed: boolean;
  dueDate?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
