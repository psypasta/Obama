import {User} from './user';

export class Comment {
  get user(): User {
    return this._user;
  }

  get content(): string {
    return this._content;
  }

  get id(): number {
    return this._id;
  }

  private _user: User;
  private _content: string;
  private _id: number;

  constructor(user: User, content: string, id: number) {
    this._user = user;
    this._content = content;
    this._id = id;
  }

}
