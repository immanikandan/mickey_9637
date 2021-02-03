import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallscreenComponent } from './getallscreen.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        AgGridModule,
        RouterModule.forChild([
            { path: '', component: GetallscreenComponent },
        ])
    ],
    declarations: [
        GetallscreenComponent,
    ]
})
export class GetallscreenModule { }