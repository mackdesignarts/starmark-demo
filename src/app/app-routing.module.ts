import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
    { path: '', component: FormsDemoComponent },
    { path: 'details/:id', component: DetailsPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ FormsDemoComponent, DetailsPageComponent ];