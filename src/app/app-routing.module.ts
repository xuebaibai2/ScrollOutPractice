import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'scroll', component: ScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
