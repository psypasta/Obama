import {Role} from './role';

export class User {

  private _id: number;
  private _username: String;
  private _email: String;
  private _Role: Role;
  private _password: String;


  constructor(id: number, username: String, email: String, Role: Role) {
    this._id = id;
    this._username = username;
    this._email = email;
    this._Role = Role;
  }

  get id(): number {
    return this._id;
  }

  get email(): String {
    return this._email;
  }

  set password(value: String) {
    this._password = value;
  }
}
