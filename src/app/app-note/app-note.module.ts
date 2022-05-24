import { NoteCreateComponent } from './components/app-note-create/note-create.component';
import { CommonModule } from '@angular/common';
import { AppNoteRoutingModule } from './app-note-routing.module';
import { NoteLandingComponent } from './components/app-note-landing/note-landing.component';
import { NoteDetailsComponent } from './components/app-note-details/note-details.component';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';

import { NoteListComponent } from './components/app-note-list/note-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule  } from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    NoteListComponent,
    NoteDetailsComponent,
    NoteLandingComponent,
    NoteCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppNoteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
     MatMomentDateModule,
    FlexLayoutModule.withConfig({
			useColumnBasisZero: false,
			printWithBreakpoints: [
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'lt-sm',
				'lt-md',
				'lt-lg',
				'lt-xl',
				'gt-xs',
				'gt-sm',
				'gt- md',
				'gt-lg',
			]
		})
  ],
  providers: [
  ],
  exports: []
})
export class AppNoteModule { }
