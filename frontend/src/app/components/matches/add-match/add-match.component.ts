import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { matches } from '../../../model/model';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrl: './add-match.component.css'
})
export class AddMatchComponent implements OnInit {
  matchForm: FormGroup;
  isEditMode: boolean = false


  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<AddMatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: matches,
    private _snackbar:SnackbarService

  ) {
    this.matchForm = this.fb.group({
      flag1: ['', Validators.required],
      team1: ['', Validators.required],
      flag2: ['', Validators.required],
      team2: ['', Validators.required],
      stadium: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required,],
      time: ['', Validators.required,]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.matchForm.patchValue({
        flag1: this.data.flag1,
        team1: this.data.team1,
        flag2: this.data.flag2,
        stadium: this.data.stadium,
        team2: this.data.team2,
        place: this.data.place,
        date: this.data.date,
        time: this.data.time,
      });
    }
    if (this.data) {
      this.isEditMode = true
    }
  }

  onSubmit() {
    if (this.matchForm.valid) {
      if (this.data) {
        this.api.editMatch(this.data._id, this.matchForm.value).subscribe({
          next: (res) => {
            this._snackbar.opensnackbar("Updated Successfully");
            this.close();
          },
          error: (err) => {
          }
        })
        
      } else {
          this.api.creatMatch(this.matchForm.value).subscribe({
            next: (res) => {
              this._snackbar.opensnackbar("Added Successfully");
              this.close()
            },
            error: (err) =>
              console.log(err)
          })
        }
      
    } else {
      console.log('Form is invalid');
    }
  }
  close() {
    this.dialogRef.close(true)
  }
}

