import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from '../../services/services.index';



@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: []
})
export class AccountSettingComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc,
    public _setting: SettingService) { }

  ngOnInit() {
    this.setCheck();
  }
  changeColor(color, link) {
    this._setting.setTheme(color);
    this.setCheck();
  }
  setCheck() {
    let selectros: any = document.getElementsByClassName('selector');
    for (let ref of selectros) {
      if (ref.getAttribute('data-theme') == this._setting.setting.theme)
        ref.classList.add('working');
      else
        ref.classList.remove('working');
    }
  }
}
