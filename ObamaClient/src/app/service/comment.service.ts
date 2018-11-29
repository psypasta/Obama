import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Thread} from '../model/thread';

const commentURL = 'http://localhost:5000/comments/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComment(commentId: number): Observable<Comment> {
    return this.http.get<Comment>(commentURL + '' + commentId);
  }

  getThreadComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(commentURL + 'post/' + postId);
  }

  getUserComments(userId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(commentURL + 'user/' + userId);
  }
}
