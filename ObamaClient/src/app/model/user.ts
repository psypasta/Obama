export class User {

  private _id: number;
  private _password: String;
  private _email: String;

  constructor(email: String, password: String) {
    this._email = email;
    this._password = password;
    this._id = 1;
  }

  get id(): number {
    return this._id;
  }

  get password(): String {
    return this._password;
  }

  get email(): String {
    return this._email;
  }
}
