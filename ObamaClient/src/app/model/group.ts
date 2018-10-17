import {User} from './user';

export class Group {

  private id: number;
  private group_name: String;
  private group_creator: number;
  private group_topic: String;

  constructor(id: number, group_name: String, group_creator: number, group_topic: String) {
    this.id = id;
    this.group_name = group_name;
    this.group_creator = group_creator;
    this.group_topic = group_topic;
  }

}
