import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
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
    this.dialog.open(AuthenticationComponent, {width: '500px', height: 'auto'});
  }

}
