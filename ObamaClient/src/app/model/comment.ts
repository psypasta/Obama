import {User} from './user';

export class Comment {
  get user(): User {
    return this._user;
  }

  get content(): string {
    return this._content;
  }

  get createdBy(): Date {
    return this._createdBy;
  }

  get updatedBy(): Date {
    return this._updatedBy;
  }

  get id(): number {
    return this._id;
  }

  get editComment(): string {
    return this._editComment;
  }
  private _user: User;
  private _content: string;
  private _createdBy: Date;
  private _updatedBy: Date;
  private _id: number;
  private _editComment: string;

  constructor(user: User, content: string, createdBy: Date, updatedBy: Date, id: number, editComment: string) {
    this._user = user;
    this._content = content;
    this._createdBy = createdBy;
    this._updatedBy = updatedBy;
    this._id = id;
    this._editComment = editComment;
  }

}
