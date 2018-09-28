import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/lang/translate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public _translate: TranslateService, public _router:Router) { 
  }

  ngOnInit() {
  }
  login()
  {
    console.log('router');
  this._router.navigate(['/dashboard']);
  }
}
