import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userMessage = {
    userName: '',
    userText: '',
    rememberUser: false,
  };

  constructor(public dialogRef: MatDialogRef<ContactComponent> ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userMessage);
    this.dialogRef.close();
  }

}
