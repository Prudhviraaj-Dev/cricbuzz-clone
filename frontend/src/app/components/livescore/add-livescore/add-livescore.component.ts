import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LiveScore } from '../../../model/model';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-livescore',
  templateUrl: './add-livescore.component.html',
  styleUrl: './add-livescore.component.css'
})
export class AddLivescoreComponent implements OnInit {
  liveScoreForm: FormGroup;
  isEditMode:boolean=false

  constructor(
    private fb: FormBuilder,
    private api:ApiService,
    private dialogRef: MatDialogRef<AddLivescoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LiveScore,
    private _snackbar:SnackbarService
  ) {
    this.liveScoreForm = this.fb.group({
      match: ['', Validators.required],
      venue: ['', Validators.required],
      team1: ['', Validators.required],
      score1: [null, Validators.required],
      team2: ['', Validators.required],
      score2: [null, Validators.required],
      toss: ['', Validators.required],
      result: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.liveScoreForm.patchValue({
        match: this.data.match,
        venue: this.data.venue,
        team1: this.data.team1,
        score1: this.data.score1,
        team2: this.data.team2,
        score2: this.data.score2,
        toss: this.data.toss,
        result: this.data.result,
      });
    }
    if(this.data){
      this.isEditMode=true
    }
  }

  onSubmit(): void {
    if (this.liveScoreForm.valid) {
      if(this.data){
        this.api.editLiveScore(this.data._id, this.liveScoreForm.value).subscribe({
          next: (res)=> {
            this._snackbar.opensnackbar("Live Score Updated");
            this.close()
          },
          error: (err)=>{
          }
        })
      }else{
        this.api.addLiveScore(this.liveScoreForm.value).subscribe({
          next: (res)=>{
            this._snackbar.opensnackbar("Live Score Added");
          },
          error: (err)=>
            console.log(err)
        })
      }
      
    }else{
      console.log("error")
    }
  }

  close(){
    this.dialogRef.close(true)
  }
}


