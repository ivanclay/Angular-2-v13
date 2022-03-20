import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "XBACON",
    "FEIJAO",
    "OVO"
  ];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private baseURL: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  // public foodList(){
  //   return this.list;
  // }

  // public foodListAdd(value: string) {
  //   this,this.foodListAlert(value);
  //   return this.list.push(value);
  // }

  public foodList(): Observable<Array<FoodList>>{
    return this.http
        .get<Array<FoodList>>( `${this.baseURL}list-food`)
        .pipe(
          res => res,
          error => error
        );
  }

  public foodListAdd(value: string): Observable<FoodList> {
      return this.http
                 .post<FoodList>(`${this.baseURL}list-food`, {nome: value})
                 .pipe(
                   res => res,
                   error => error
                 );
  }

  public foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.http
               .put<FoodList>(`${this.baseURL}list-food/${id}`, {nome: value})
               .pipe(
                 res => res,
                 error => error
               );
}

public foodListDelete(id: number): Observable<FoodList> {
  return this.http
             .delete<FoodList>(`${this.baseURL}list-food/${id}`)
             .pipe(
               res => res,
               error => error
             );
}

  // public foodListAlert(value: string){
  //   return this.emitEvent.emit(value);
  // }

  public foodListAlert(value: FoodList){
    return this.emitEvent.emit(value);
  }

}
