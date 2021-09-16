import { Component, OnInit } from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "./components/register/register.component";
import {Router} from "@angular/router";
import { AuthService } from '../core/sevices/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  formReactive: FormGroup;

  constructor(private formBuilder:FormBuilder) {

    this.formReactive = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  getValue(value:string){
    return this.formReactive.get(value);
  }


}
