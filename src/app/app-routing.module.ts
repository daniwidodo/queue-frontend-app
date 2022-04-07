import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VisitorAddComponent } from './components/visitor/visitor-add/visitor-add.component';
import { VisitorListComponent } from './components/visitor/visitor-list/visitor-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-visitor', component: VisitorAddComponent },
  { path: 'list-visitor', component: VisitorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
