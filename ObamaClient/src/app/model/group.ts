import {User} from './user';

export class Group {

  private _id: int;
  private _group_name: String;
  private _group_creator: User.id;
  private _group_topic: String;

  constructor(id: int, group_name: String, group_creator: User.id, group_topic: String) {
    this._id = id;
    this._group_name = group_name;
    this._group_creator = group_creator;
    this._group_topic = group_topic;
  }

  get group_name(): String {
    return this._group_name;
  }

  set group_name(value: String) {
    this._group_name = value;
  }

  get group_creator(): User.id {
    return this._group_creator;
  }

  set group_creator(value: User.id) {
    this._group_creator = value;
  }

  get group_topic(): String {
    return this._group_topic;
  }

  set group_topic(value: String) {
    this._group_topic = value;
  }

  get id(): int {
    return this._id;
  }
}
