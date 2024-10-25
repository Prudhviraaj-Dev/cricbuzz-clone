import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm: FormGroup;
  isEditMode: boolean = false;
  playerData: any; 
  playerTypeOptions: string[] = ['Batter', 'Bowler', 'All-rounder', 'Wicketkeeper'];
  playerStyleOptions: string[] = ['LHB', 'RHB',];
  playerTypeUrlOptions=['https://www.bcci.tv/img/bat.svg','https://www.bcci.tv/img/ball.svg','https://www.bcci.tv/img/plyr-keeper.svg','https://www.bcci.tv/img/all-rounder.svg',]

  constructor(
    private fb: FormBuilder,
    private api:ApiService,
    private dialogRef: MatDialogRef<AddPlayerComponent>,
    private _snackbar:SnackbarService
  
  ) {
    this.addPlayerForm = this.fb.group({
      imgURL: ['', Validators.required],
      name: ['', Validators.required],
      typeURL: ['', Validators.required],
      playertype: ['', Validators.required],
      age: ['', Validators.required],
      style: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.isEditMode && this.playerData) {
      this.addPlayerForm.patchValue(this.playerData);
    }
  }

  onSubmit(): void {
    if (this.addPlayerForm.valid) {
      this.api.creatPlayer(this.addPlayerForm.value).subscribe({
        next: (res)=>{
          this._snackbar.opensnackbar("Player Added Successfully");
          this.close()

        },
        error: (err)=>
          console.log(err)
      })
    }
  }

  close(){
    this.dialogRef.close(true)
  }
}
