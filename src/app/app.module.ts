import { AppNoteModule } from './app-note/app-note.module';
import { MaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppNoteModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
