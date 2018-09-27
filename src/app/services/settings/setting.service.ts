import { Injectable } from '@angular/core';
import { AccountSettingComponent } from '../../pages/account-setting/account-setting.component';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Injectable()
export class SettingService {
  setting: Setting =
  {
    themeUrl: "assets/css/colors/default.css",
    theme:"default"
  }
  constructor() { 
    this.getSetting();
  }
  saveSetting()
  {
    localStorage.setItem('setting', JSON.stringify(this.setting));
  }
  getSetting()
  {
    if(localStorage.getItem('setting'))
    {
      this.setting = JSON.parse(localStorage.getItem('setting'));
      this.setTheme(this.setting.theme);
    }
  }
  setTheme(theme:string)
  {
    this.setting.theme = theme;
    this.setting.themeUrl = `assets/css/colors/${theme}.css`;
    document.getElementById('theme').setAttribute('href', this.setting.themeUrl);
    this.saveSetting();
  }
}

interface Setting
{
  themeUrl:string;
  theme:string;
}