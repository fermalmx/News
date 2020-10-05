import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostList } from '../models/post-list.interface';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.interface';
import { Category } from 'src/app/models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = "bc03b26063ac412798185a0a6d04f7af";
  private countries: Country[] = [
    {
      value: "mx",
      field: "México"
    },
    {
      value: "us",
      field: "Estados Unidos"
    }
  ];
  private categories: Category[] = [
    {
      value: "business",
      field: "Negocios"
    },
    {
      value: "technology",
      field: "Tecnología"
    }
  ];

  private page: number;

  public getPage() {
    return this.page;
  }

  constructor(private httpClient: HttpClient) { }

  retrieveNews(country: string, category: string):Observable<PostList[]> {
    var url = 'http://newsapi.org/v2/top-headlines?pageSize=12&country=' + country + '&category=' + category + '&apiKey=' + this.apiKey;
    return this.httpClient.get<PostList[]>(url);
  }

  getCountries() {
    return this.countries;
  }
  getCategories() {
    return this.categories;
  }
}
