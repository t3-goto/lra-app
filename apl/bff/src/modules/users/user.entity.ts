import { EntitySchema } from 'typeorm';

export class User {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    userId: {
      type: Number,
      primary: true,
      generated: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    firstName: {
      type: String,
      nullable: true,
    },
    lastName: {
      type: String,
      nullable: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  uniques: [
    {
      name: 'UNIQUE_TEST',
      columns: ['username'],
    },
  ],
});
