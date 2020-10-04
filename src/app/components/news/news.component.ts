import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  public signOut() {
    this.authService.signOut();
  }

  ngOnInit(): void {
  }

}
