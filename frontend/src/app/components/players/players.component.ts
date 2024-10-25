import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ApiService } from '../../services/api/api.service';
import { Player } from '../../model/model';
import { AuthUtil } from '../../services/auth/auth.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit{
  allplayers:Player[]=[];
  canEdit: boolean = false;

  constructor(
    private dialog: MatDialog,
    private api:ApiService
  ) { }

  ngOnInit() {
    this.getPlayers()
    this.canEdit = AuthUtil.hasPermission('has_Permision');
  }

  getPlayers(){
    this.api.getPlayers().subscribe({
      next: (res)=>{
        this.allplayers=res
      },
      error: (err)=>{
      }
    })
  }



  addplayer() {
    const dialogRef = this.dialog.open(AddPlayerComponent)

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getPlayers();
      }
    });
  }

}
