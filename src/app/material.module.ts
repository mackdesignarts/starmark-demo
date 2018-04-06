import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule, 
        MatCardModule, 
        MatToolbarModule, 
        MatDividerModule, 
        MatSelectModule, 
        MatInputModule,
        MatAutocompleteModule,
        MatGridListModule
    ],
    exports: [
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule, 
        MatCardModule, 
        MatToolbarModule, 
        MatDividerModule, 
        MatSelectModule,
        MatInputModule,
        MatAutocompleteModule,
        MatGridListModule
    ]
})

export class MaterialModule {}