import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full',
  },
  {
      path: 'notes',
      loadChildren: () => import('../app/app-note/app-note.module').then((m) => m.AppNoteModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
