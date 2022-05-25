import { Subscription } from 'rxjs';
import { INotes } from './../../models/Note.models';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

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
      private activateRoute: ActivatedRoute,
      private router: Router
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

  editNote(){
    this.router.navigate(['notes', 'edit',`${this.currentNoteId}`]).then((r) => r);
  }

  ngOnDestroy(): void {
      this.subcriptionList.filter(d => d.unsubscribe());
  }

}
