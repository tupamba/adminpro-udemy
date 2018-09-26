import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {FormsModule } from "@angular/forms";
import { IncrementComponent } from './increment/increment.component';
import { ComponentComponent } from './component.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations:[
        ComponentComponent,
        IncrementComponent,
        ChartViewComponent
    ],
    exports:[
        IncrementComponent,
        ChartViewComponent
    ],
    imports:[
        SharedModule,
        FormsModule,
        ChartsModule
    ]

})
export class ComponentModule{}