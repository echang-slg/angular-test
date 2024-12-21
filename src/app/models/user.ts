import { Task } from './';

export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  occupation?: string;
  birthDay?: Date;
  avatar: string;

  tasks?: Task[];
}
