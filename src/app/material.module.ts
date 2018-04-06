import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatToolbarModule],
    exports: [MatButtonModule, MatCardModule, MatToolbarModule]
})

export class MaterialModule {}