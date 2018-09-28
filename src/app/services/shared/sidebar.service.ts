import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu:any = [
    {
      title:'Main',
      icon:'mdi mdi-gauge',
      submenu:[
        {
          title:'Dashboard',
          url:'/dashboard'
        },
        {
          title:'ProgessBar',
          url:'/progress'
        },
        {
          title:'Chart',
          url:'/graficas1'
        }
      ]
    }
  ];
  constructor() { }

}
