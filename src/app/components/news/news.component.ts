import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewsService } from 'src/app/services/news.service';
import { Post } from 'src/app/models/post.interface'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public noticias: Post[];
  
  constructor(
    private authService: AuthenticationService,
    private newsService: NewsService
    ) { }

  public signOut() {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.newsService.retrieveNews().subscribe(data => {
      this.noticias = data;
      console.log(data)   
    })
  }

}
