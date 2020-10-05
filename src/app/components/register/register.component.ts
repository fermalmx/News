import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public email: string;
  public password: string;

  constructor(
    private authService: AuthenticationService,
    private dialog: MatDialog
    ) { }

  public signUp() {
    this.authService.signUp(this.email, this.password);
    this.dialog.closeAll();
  }

  ngOnInit(): void { }
}
