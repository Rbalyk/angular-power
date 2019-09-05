import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mode = new FormControl('over');
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openContactForm() {
    this.dialog.open(ContactComponent);
  }

  logIn() {
    this.dialog.open(LoginComponent, {width: '500px', height: 'auto'});
  }

}
