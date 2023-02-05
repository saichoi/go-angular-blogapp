import { Injectable } from '@angular/core';
import {LoginRequestMessage, ResponseLogin, ResponseUser, User} from "../models/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  join(data: User) {
    return this.http.post(`http://localhost:8080/users`, data);
  }

  login(data: LoginRequestMessage){
    return this.http.post<ResponseLogin>(`http://localhost:8080/users/login`, data);
  }

  getUser(id: number) {
    return this.http.get<ResponseUser>(`http://localhost:8080/users/${id}`);
  }

  update(id: number, data: User) {
    return this.http.put(`http://localhost:8080/users/${id}`, data);
  }

  constructor(private http: HttpClient) { }
}
