import { MatSnackBar } from '@angular/material/snack-bar';
import { INotes } from './../../models/Note.models';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  noteList: INotes[] = [];

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    
   }

  ngOnInit(): void {
    this.fetchData();
  }

  gotToNoteDetails(noteId: string){
    this.router.navigate(['notes', 'details',`${noteId}`]).then((r) => r);
  }

  createNewNote(){
    this.router.navigate(['notes','create']).then((r) => r);
  }

  fetchData(){
    this.noteList = JSON.parse(localStorage.getItem('NoteList') || "{}");
  }

  removeNotes(noteId: string){
    let noteList = JSON.parse(localStorage.getItem("NoteList") || "[]");
    let currentNote = noteList.filter((item: any) => item.noteId == noteId);
    console.log(currentNote);
    if(currentNote.length > 0){
      noteList = noteList.filter((item: any) => item.noteId != noteId);
      localStorage.setItem("NoteList",JSON.stringify(noteList));
      this.fetchData();
      this.snackBar.open('Delete Note successfully!!','Ok',{ duration: 3000});
    }
  }

  editNotes(noteId: string){
    this.router.navigate(['notes', 'edit',`${noteId}`]).then((r) => r);
  }

}
