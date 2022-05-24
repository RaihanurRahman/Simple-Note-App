import { NoteCreateComponent } from './components/app-note-create/note-create.component';
import { NoteDetailsComponent } from './components/app-note-details/note-details.component';
import { NoteListComponent } from './components/app-note-list/note-list.component';
import { NoteLandingComponent } from './components/app-note-landing/note-landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NoteLandingComponent,
    children:[
        {
            path: '',
            component: NoteListComponent
        },
        {
            path: 'details/:id',
            component: NoteDetailsComponent
        },
        {
            path: 'create',
            component: NoteCreateComponent
        },
        {
            path: 'edit/:id',
            component: NoteCreateComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppNoteRoutingModule { }
