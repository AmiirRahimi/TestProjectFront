import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { ILogin } from 'src/AccountInterface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  IsAuthenticated$ = new Subject<any>()
  private url = 'http://127.0.0.1:5000/api/'
  Login(data:any) :Observable <any> {
    return this.http.post<ILogin[]>(this.url + 'login' , data , {observe : 'response'}).pipe(catchError(this.GetError))
  }

  Register(data:any) : Observable <any>{
    return this.http.post<ILogin[]>(this.url + 'register' , data , {observe : 'response'})
  }

  Products() : Observable<ILogin[]>{
    return this.http.get<ILogin[]>(this.url + 'product/list' , {observe: 'body', responseType: 'json'}).pipe(catchError(this.GetError))
  }

  ProductDetails(id : any) : Observable<ILogin[]>{
    return this.http.post<ILogin[]>(this.url + 'product/details' , id , {observe : 'body' , responseType : 'json'})
  }

  GetError(){
    return throwError('please try again')
  }

  constructor(private http:HttpClient) { }
}
