import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Group} from '../model/group';


const threadURL = 'http://localhost:5000/group';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private group = new Group(1, 'funny', 1, 'funny pictures');

  constructor() { }
}
