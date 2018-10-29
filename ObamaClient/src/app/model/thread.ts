import {User} from './user';
import {Group} from './group';

export class Thread {

  private _id: number;
  private _title: String;
  private _content: String;
  private _link: String;
  private _createBy: User;
  private _updateBy: User;
  private _updateWhen: String;
  private _createdWhen: String;
  private _group: Group;
  private _boats: number;

  constructor(id: number, title: String, content: String, link: String,
              createBy: User, updateBy: User, updateWhen: String, createdWhen: String, group: Group, boats: number) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._link = link;
    this._createBy = createBy;
    this._updateWhen = updateWhen;
    this._createdWhen = createdWhen;
    this._group = group;
    this._updateBy = updateBy;
  };

  public boat(value: boolean) {
    if (value) {

      this._boats++;

    } else {
      this._boats--;
    }
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

  get link(): String {
    return this._link;
  }

  get createBy(): User {
    return this._createBy;
  }

  get updateBy(): User {
    return this._updateBy;
  }

  get createdWhen(): String {
    return this._createdWhen;
  }

  get group(): Group {
    return this._group;
  }

  get boats(): number {
    return this._boats;
  }
}
