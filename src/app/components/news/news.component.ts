import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewsService } from 'src/app/services/news.service';
import { PostList } from 'src/app/models/post-list.interface';
import { Country } from 'src/app/models/country.interface';
import { Category } from 'src/app/models/category.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public noticias: PostList[];
  public countries: Country[];
  public selectedCountry: Country = {
    value: 'mx',
    field: 'México'
  }
  public categories: Category[];
  public selectedCategory: Category = {
    value: 'technology',
    field: 'Tecnología'
  }

  constructor(
    private authService: AuthenticationService,
    private newsService: NewsService
    ) { }

  public signOut() {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.countries = this.newsService.getCountries();
    this.categories = this.newsService.getCategories();
    this.newsService.retrieveNews('mx', 'technology').subscribe(data => this.noticias = data['articles']);
  }

  public filterNews() {
    this.newsService.retrieveNews(this.selectedCountry.value, this.selectedCategory.value).subscribe(data => this.noticias = data['articles']);
  }

}
