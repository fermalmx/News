import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewsService } from 'src/app/services/news.service';
import { PostList } from 'src/app/models/post-list.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public noticias: PostList[];
  
  constructor(
    private authService: AuthenticationService,
    private newsService: NewsService
    ) { }

  public signOut() {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.newsService.retrieveNews().subscribe(data => this.noticias = data['articles'])
  }

}
