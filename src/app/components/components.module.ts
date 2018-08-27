import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {FormsModule } from "@angular/forms";
import { IncrementComponent } from './increment/increment.component';
import { ComponentComponent } from './component.component';
@NgModule({
    declarations:[
        ComponentComponent,
        IncrementComponent
    ],
    exports:[
        IncrementComponent
    ],
    imports:[
        SharedModule,
        FormsModule
    ]

})
export class ComponentModule{}