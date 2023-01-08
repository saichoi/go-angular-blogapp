import { Injectable } from '@angular/core';
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  join(data: User) {
    return this.http.post(`http://localhost:8080/users`, data);
  }

  constructor(private http: HttpClient) { }
}
