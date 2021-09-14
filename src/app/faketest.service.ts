import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './models/users.model';

@Injectable({
  providedIn: 'root'
})
export class FaketestService {

  constructor(private hc:HttpClient) { }

  getUsers():Observable<Users[]>{
    return this.hc.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  } 

  getPage():Observable<any>{
    return this.hc.get<any>('https://reqres.in/api/unknown');
  } 

  getDetails():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users');
  }
  getDetailsById(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users/'+id);
  }
}
