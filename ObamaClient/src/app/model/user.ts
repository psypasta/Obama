export class User {

  private id: number;
  private username: String;
  private created_date: Date;
  private email: String;

  constructor(id: number, username: String, created_date: Date, email: String) {
    this.id = id;
    this.username = username;
    this.created_date = created_date;
    this.email = email;
  }
}
