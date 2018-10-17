export class User {

  private id: int;
  private username: String;
  private created_date: Date;
  private email: String;

  public User() {
    this.id = 1;
    this.username = 'default';
    this.email = 'default@default.com';
    this.created_date = Date;
  }
}
