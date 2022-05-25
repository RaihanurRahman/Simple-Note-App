import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { INotes } from './../../models/Note.models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit, OnDestroy {
    currentNote: INotes | undefined;
    currentNoteId: string = "";
    noteForm: FormGroup | undefined;
    subcriptionList: Subscription[] = [];
    noteList: INotes[] = [];
    isEdit: boolean = false;
    
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private activateRoute: ActivatedRoute,
        private snackBar: MatSnackBar

    ) {
        this.noteList = JSON.parse(localStorage.getItem("NoteList") || "[]");

        let subscription = this.activateRoute.params.subscribe((params: any) =>{
            console.log(params);
            this.currentNoteId = params.id;
        })
        if(this.currentNoteId) this.isEdit = true;
        this.subcriptionList.push(subscription); 
     }
  
    ngOnInit(): void {
        if(this.currentNoteId){
            this.currentNote = this.noteList.filter((d: any)=> d.noteId == this.currentNoteId)[0];
            this.initForm(this.currentNote);
        }
        else this.initForm();
      
    }

    initForm(formData?: INotes){
        this.noteForm = this.fb.group({
            noteId: [formData && formData.noteId ? formData.noteId : Guid.create()],
            title: [formData && formData.title ? formData.title :'',Validators.required],
            body: [formData && formData.body ? formData.body :'', Validators.required],
            createDate: [formData && formData.createDate ? formData.createDate : new Date(), Validators.required]
        }) 
    }

    createNewNote(){
        console.log(this.noteForm);
        let newNote: INotes = {
            title: this.noteForm?.get('title')?.value,
            body: this.noteForm?.get('body')?.value,
            noteId: this.noteForm?.get('noteId')?.value.value,
            createDate: this.noteForm?.get('createDate')?.value,
        } 
        if(this.currentNoteId){
            this.noteList.filter((d: any) =>{
                if(d.noteId == this.currentNoteId){
                    d.title = newNote.title;
                    d.body = newNote.body;
                    d.createDate = newNote.createDate
                }
            });
            this.snackBar.open('Update Note successfully!!','Ok',{ duration: 3000});
        }
        else {
            this.noteList.push(newNote);
            this.snackBar.open('Create Note successfully!!','Ok',{ duration: 3000});
        }
        localStorage.setItem("NoteList",JSON.stringify(this.noteList));
        this.router.navigate(['notes']);
    }

    ngOnDestroy(): void {
        this.subcriptionList.filter(d => d.unsubscribe());
    }
}
