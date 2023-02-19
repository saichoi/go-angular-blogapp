import { Injectable } from '@angular/core';
import {Board} from "../models/board";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  save(data: Board) {
    console.log('data',data)
    return this.http.post(`http://localhost:8080/board/save`, data);
  }

  constructor(private http: HttpClient) { }
}
