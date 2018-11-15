import {User} from './user';
import {Group} from './group';

enum PostType {
  TEXT_POST,
  LINK_POST
}

export class Thread {

  private _id: number;
  private _title: String;
  private _content: String;
  private _u: User;
  private _postType: PostType;

  constructor(id: number, postType: PostType, createBy: User, title: String, content: String,
              ) {
    this._id = id;
    this._postType = postType;
    this._u = createBy;
    this._title = title;
    this._content = content;
  }

  get id(): number {
    return this._id;
  }

  get title(): String {
    return this._title;
  }

  get content(): String {
    return this._content;
  }

  get createBy(): User {
    return this._u;
  }
}
