import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Season } from '../model/season';
let URI = `http://localhost:3000/`;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  seasons: Season[];
  loading = false;
  constructor(private http: HttpClient) { }
  searchSeason(title: string): Observable<any>{
      return this.http.get(URI+'searchSeason', {params:{title: title}});
  }
  searchMovie(title, rows, pageno): Observable<any>{
    return this.http.get(URI+ 'searchMovie', {params: {title: title, rows: rows, pageno: pageno}});
  }
}
