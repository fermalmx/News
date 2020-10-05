import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { EndingSessionComponent } from 'src/app/verification/ending-session/ending-session.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public email: string;

  constructor(
    private fauth: AngularFireAuth,
    private dialog: MatDialog
    ) {
      this.fauth.currentUser.then(user => this.email = user.email);
    }

  public openDialog() {
    this.dialog.open(EndingSessionComponent);
  }

  ngOnInit(): void { }
}
