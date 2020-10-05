import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    private authService: AuthenticationService,
    private dialog: MatDialog
    ) { }

  public signIn() {
    this.authService.signIn(this.email, this.password);
  }

  public openDialog() {
    this.dialog.open(RegisterComponent);
  }

  ngOnInit(): void {
  }

}
