import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  logIn() {
    this.dialog.open(AuthenticationComponent, {width: '500px', height: 'auto'});
  }

}
