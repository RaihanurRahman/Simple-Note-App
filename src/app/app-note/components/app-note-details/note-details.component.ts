import { INotes } from './../../models/Note.models';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit, OnDestroy {
  currentNote: INotes | undefined;
  currentNoteId: string = "";
  subcriptionList: Subscription[] = [];
  
  constructor(
      private activateRoute: ActivatedRoute
  ) {
        let subscription = this.activateRoute.params.subscribe((params: any) =>{
            console.log(params);
            this.currentNoteId = params.id;
        })
        this.subcriptionList.push(subscription);
   }

  ngOnInit(): void {
      let noteList = JSON.parse(localStorage.getItem("NoteList") || "{}");
      this.currentNote = noteList.filter((item: any) => item.noteId == this.currentNoteId)[0];
  }

  ngOnDestroy(): void {
      this.subcriptionList.filter(d => d.unsubscribe());
  }

}
