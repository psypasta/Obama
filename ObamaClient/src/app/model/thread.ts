import {User} from './user';

export class Thread {

  private _id: int;
  private _title: String;
  private _content: String;
  private _link: String;
  private _User: created_by;
  private _Date: updated_last;
  private _String: created_when;
  private _Group: String;


  constructor(id: int, title: String, content: String, link: String, User: created_by, Date: updated_last, String: created_when, Group: String) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._link = link;
    this._User = User;
    this._Date = Date;
    this._String = String;
    this._Group = Group;
  }

  set title(value: String) {
    this._title = value;
  }

  set content(value: String) {
    this._content = value;
  }

  set link(value: String) {
    this._link = value;
  }

  set Date(value: updated_last) {
    this._Date = value;
  }

  set String(value: created_when) {
    this._String = value;
  }

  set Group(value: String) {
    this._Group = value;
  }

  get id(): int {
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

  get User(): created_by {
    return this._User;
  }

  get Date(): updated_last {
    return this._Date;
  }

  get String(): created_when {
    return this._String;
  }

  get Group(): String {
    return this._Group;
  }
}
