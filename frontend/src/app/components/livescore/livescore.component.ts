import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { AddLivescoreComponent } from './add-livescore/add-livescore.component';
import { MatDialog } from '@angular/material/dialog';
import { LiveScore } from '../../model/model';
import { AuthService, AuthUtil } from '../../services/auth/auth.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrl: './livescore.component.css'
})
export class LivescoreComponent implements OnInit {
  canEdit: boolean = false;
  livescore: LiveScore[] = [];
  constructor(private api: ApiService, private dialog: MatDialog, private auth:AuthService,private _snackbar:SnackbarService) { }

  ngOnInit() {
    this.getLiveScore()
    this.canEdit = AuthUtil.hasPermission('has_Permision');
  }

  getLiveScore() {
    this.api.getLiveScoredata().subscribe({
      next: (res) => {
        this.livescore = res
      },
      error: (err) => {

      }
    })
  }

  addLivescore() {
    this.dialog.open(AddLivescoreComponent)
  }

  onDelete(id: any) {
    this.livescore = this.livescore.filter((data) => data._id !== id);
    if (id) {
      this.api.deleteLiveScore(id).subscribe({
        next: (res) => {
          this._snackbar.opensnackbar("Deleted Successfully");
          this.getLiveScore();
        },
        error: (err) => {
        },
      });
    } else {
    }
  }

  editLiveScore(id: any) {
    const studentToEdit = this.livescore.find((student) => student._id === id);
    const dialogRef = this.dialog.open(AddLivescoreComponent, {
      disableClose: true,
      data: studentToEdit,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getLiveScore();
      }
    });
  }


}
