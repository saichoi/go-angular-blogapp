import { Injectable } from '@angular/core';
import {LoginRequestMessage, User} from "../models/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  join(data: User) {
    return this.http.post(`http://localhost:8080/users`, data);
  }

  login(data: LoginRequestMessage){
    return this.http.post(`http://localhost:8080/users/login`, data);
  }

  constructor(private http: HttpClient) { }
}
