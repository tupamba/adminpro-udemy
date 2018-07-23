import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/lang/translate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public _translate: TranslateService) { 
  }

  ngOnInit() {
  }

}
