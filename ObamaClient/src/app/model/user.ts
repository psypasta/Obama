
enum Roles {
  ROLE_USER,
  ROLE_ADMIN
}

export class User {

  private _id: number;
  private _username: String;
  private _email: String;
  private _name: String;
  private _roles: Roles;

  constructor(email: String, id: number, name: String, roles: Roles, username: String) {
    this._email = email;
    this._id = id;
    this._name = name;
    this._roles = roles;
    this._username = username;
  }

  get id(): number {
    return this._id;
  }

  get email(): String {
    return this._email;
  }

  get name(): String {
    return this._name;
  }

  get roles(): Roles {
    return this._roles;
  }

  get username(): String {
    return this._username;
  }
}
