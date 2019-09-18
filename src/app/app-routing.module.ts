import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCardComponent } from './my-card/my-card.component';


const routes: Routes = [
  { path: 'myPage', component: MyCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
