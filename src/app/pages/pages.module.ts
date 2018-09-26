import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGE_ROUTES } from './pages.routes';
import {FormsModule } from "@angular/forms";
import { ComponentModule } from '../components/components.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports:[
        SharedModule,
        PAGE_ROUTES,
        FormsModule,
        ComponentModule,
        BrowserModule
    ]

})
export class PagesModule{}