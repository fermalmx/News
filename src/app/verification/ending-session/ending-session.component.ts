import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ending-session',
  templateUrl: './ending-session.component.html',
  styleUrls: ['./ending-session.component.css']
})
export class EndingSessionComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private dialog: MatDialog
  ) { }
  
  public signOut() {
    this.authService.signOut();
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

}
