import {User} from './user';

export class Thread {

  private id: number;
  private title: String;
  private content: String;
  private link: String;
  private createBy: String;
  private updateBy: Date;
  private createdWhen: Date;
  private Group: String;
  constructor(id: number, title: String, content: String, link: String,
              createBy: String, updateBy: Date, createdWhen: Date, Group: String) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.link = link;
    this.createBy = createBy;
    this.updateBy = updateBy;
    this.createdWhen = createdWhen;
    this.Group = Group;
  }
}
