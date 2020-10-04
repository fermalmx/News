import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostList } from '../models/post-list.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = "bc03b26063ac412798185a0a6d04f7af";
  public country = "mx";

  constructor(
    private httpClient: HttpClient,

    ) { }

  retrieveNews():Observable<PostList[]> {
    var url = 'http://newsapi.org/v2/top-headlines?country=' + this.country +'&apiKey=' + this.apiKey;
    return this.httpClient.get<PostList[]>(url);
  }

  getPostById(source: string) {
    var url = 'http://newsapi.org/v2/top-headlines?source=' + source +'&apiKey=' + this.apiKey;
    return this.httpClient.get(url);
  }
}
