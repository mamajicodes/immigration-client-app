import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImmigrationListComponent } from './pages/immigration-list/immigration-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', component: ImmigrationListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
