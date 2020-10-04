import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private authService: AuthenticationService ) { }

  public signIn(email: string, password: string) {
    this.authService.signIn(email, password);
  }

  ngOnInit(): void {
  }

}
