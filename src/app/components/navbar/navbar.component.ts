import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userEmail: string;

  constructor(private authService: AuthenticationService) {
    this.userEmail = authService.getEmail();
  }

  public signOut() {
    this.authService.signOut();
  }

  ngOnInit(): void {
  }

}
