import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { matches } from '../../model/model';
import { MatDialog } from '@angular/material/dialog';
import { AddMatchComponent } from './add-match/add-match.component';
import { AuthUtil } from '../../services/auth/auth.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent  implements OnInit {
  canEdit: boolean = false;
allMatches: matches[] = [];
  constructor(
    private api:ApiService,
    private dialog:MatDialog,
    private _snackbar:SnackbarService
    
  ){}

  ngOnInit() {
    this.getMatches()
    this.canEdit = AuthUtil.hasPermission('has_Permision');
  }

  getMatches(){
    this.api.getAllMatches().subscribe({
      next: (res)=>{
        this.allMatches=res
      },
      error: (err)=>{
      }
    })
  }

  addMatch(){
    this.dialog.open(AddMatchComponent)
  }

  onDelete(id:any){
    this.allMatches = this.allMatches.filter((data)=> data._id !==id)
    if(id){
      this.api.deleteMatch(id).subscribe({
        next: (res)=>{
          this._snackbar.opensnackbar("Deleted Successfully");
        },
        error: (err)=> {

        }
      })
    }
  }

  onEdit(id:any){
    const editmatch = this.allMatches.find((data)=> data._id ===id)
    const dialogRef = this.dialog.open(AddMatchComponent, {
      disableClose: true,
      data: editmatch,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getMatches();
      }
    });

  }
}
