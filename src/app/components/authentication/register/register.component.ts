import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { User } from '../../../shared/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmitted = new EventEmitter<boolean>();
  formGroupSignUp: FormGroup;
  user: User;
  hide = true;
  titleAlert = 'Поле обовязкове';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // tslint:disable-next-line:max-line-length
    const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroupSignUp = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(emailRegex)], this.checkInUseEmail],
      password: [null, [Validators.required, this.checkPassword]],
    });
  }

  get name() {
    return this.formGroupSignUp.get('name') as FormControl;
  }

  checkPassword(control) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  }

  checkInUseEmail(control) {
    const db = ['roma@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        const result = (db.indexOf(control.value) !== -1) ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }


  getErrorEmail() {
    return this.formGroupSignUp.get('email').hasError('required') ? 'Поле обовязкове' :
      this.formGroupSignUp.get('email').hasError('pattern') ? 'Не вірний формат' :
        this.formGroupSignUp.get('email').hasError('alreadyInUse') ? 'Ця електронна пошта вже використовужться' : '';
  }

  getErrorPassword() {
    return this.formGroupSignUp.get('password').hasError('required') ? ' Поле обовязкове (вимоги: не менше 8-ми символі, одна велика літера та одне число)' :
      this.formGroupSignUp.get('password').hasError('requirements') ? 'У паролі має бути не менше восьми символів, одна велика літера та одне число' : '';
  }

  onSubmit(closed: boolean, userData) {
    this.onSubmitted.emit(closed);
    this.user = userData;
    console.warn(this.user);
  }

}
