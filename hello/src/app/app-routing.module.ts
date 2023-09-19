import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CyclesComponent } from './cycles/cycles.component';
import { BorrowedCyclesComponent } from './borrowed-cycles/borrowed-cycles.component';
import { AddCyclesComponent } from './add-cycles/add-cycles.component';


const routes: Routes = [
  // { path: '', component: AppComponent }, // Default route (you can change this)
  { path: 'cycles', component: CyclesComponent },
  { path: 'cart', component: BorrowedCyclesComponent },
  {path : '', redirectTo: '/cycles', pathMatch: 'full'},
  {path : 'AddCyclesComponent', component: AddCyclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
