import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Services
import {SettingService,SharedService,SidebarService  } from '../services/services.index';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SettingService,SharedService,SidebarService],
})
export class ServiceModule { }
