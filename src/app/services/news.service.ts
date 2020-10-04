import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = "bc03b26063ac412798185a0a6d04f7af";
  public country = "mx";

  constructor( private httpClient: HttpClient ) { }

  retrieveNews():Observable<Post[]> {
    var url = 'http://newsapi.org/v2/top-headlines?country=' + this.country +'&apiKey=' + this.apiKey;
    return this.httpClient.get<Post[]>(url);
  }
}
