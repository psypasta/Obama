import {User} from './user';

export class Group {

  private _id: number;
  private _group_name: String;
  private _group_creator: number;
  private _group_topic: String;

  constructor(id: number, group_name: String, group_creator: number, group_topic: String) {
    this._id = id;
    this._group_name = group_name;
    this._group_creator = group_creator;
    this._group_topic = group_topic;
  }


  get id(): number {
    return this._id;
  }

  get group_name(): String {
    return this._group_name;
  }

  get group_creator(): number {
    return this._group_creator;
  }

  get group_topic(): String {
    return this._group_topic;
  }
}
