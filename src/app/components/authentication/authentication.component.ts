import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AuthenticationComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
  }
}
