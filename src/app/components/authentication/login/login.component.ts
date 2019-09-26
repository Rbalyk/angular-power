import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../../shared/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }
  formGroupSignIn: FormGroup;
  user: User;
  hide = true;
  titleAlert = 'Поле обовязкове';


  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmitted = new EventEmitter<boolean>();

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // tslint:disable-next-line:max-line-length
    const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroupSignIn = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(emailRegex)]],
      password: [null, [Validators.required, this.checkPassword]]
    });
  }

  checkPassword(control) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  }


  getErrorEmail() {
    return this.formGroupSignIn.get('email').hasError('required') ? 'Поле обовязкове' :
      this.formGroupSignIn.get('email').hasError('pattern') ? 'Не вірний формат' : '';
  }

  getErrorPassword() {
    return this.formGroupSignIn.get('password').hasError('required') ? 'Поле обовязкове' : '';
 }

  onSubmit(closed: boolean, userData) {
    this.onSubmitted.emit(closed);
    this.user = userData;
    console.warn(this.user);
  }

}
