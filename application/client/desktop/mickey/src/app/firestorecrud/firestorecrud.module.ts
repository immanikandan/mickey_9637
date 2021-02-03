import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirestorecrudComponent } from './firestorecrud.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: FirestorecrudComponent },
        ])
    ],
    declarations: [
        FirestorecrudComponent,
    ]
})
export class FirestorecrudModule { }