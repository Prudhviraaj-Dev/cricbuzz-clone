import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiveScore, login, matches, Player } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getlogin(): Observable<login[]>{
    return this.http.get<login[]>(`http://localhost:5000/Cricbuzz/login/getlogin`)
  }


  getLiveScoredata(): Observable<LiveScore[]>{
    return this.http.get<LiveScore[]>(`http://localhost:5000/Cricbuzz/liveScore/getLiveScore`)
  }

  addLiveScore(data:any): Observable<LiveScore[]>{
    return this.http.post<LiveScore[]>(`http://localhost:5000/Cricbuzz/liveScore/addLiveScore`,data)
  }

  deleteLiveScore(id:any){
    return this.http.delete(`http://localhost:5000/Cricbuzz/liveScore/deleteLiveScore/${id}`)
  }

  editLiveScore(id:any, data:any): Observable<LiveScore[]>{
    return this.http.put<LiveScore[]>(`http://localhost:5000/Cricbuzz/liveScore/editLiveScore/${id}`,data)
  }






  getAllMatches(): Observable<matches[]>{
    return this.http.get<matches[]>(`http://localhost:5000/Cricbuzz/matches/getAllMatches`)
  }

  creatMatch(data:any): Observable<matches[]>{
    return this.http.post<matches[]>(`http://localhost:5000/Cricbuzz/matches/addMatch`,data)
  }

  deleteMatch(id:any): Observable<matches[]>{
    return this.http.delete<matches[]>(`http://localhost:5000/Cricbuzz/matches/deletematch/${id}`)
  }

  editMatch(id:any, data:any): Observable<matches[]>{
    return this.http.put<matches[]>(`http://localhost:5000/Cricbuzz/matches/editmatch/${id}`,data)
  }




  getPointsTable(year: number): Observable<any> {
    return this.http.get<any>(`http://localhost:5000/Cricbuzz/pointable/seasons/${year}`);
  }



  getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(`http://localhost:5000/Cricbuzz/players/getPlayers`)
  }

  creatPlayer(data:any): Observable<Player[]>{
    return this.http.post<Player[]>(`http://localhost:5000/Cricbuzz/players/addPlayer`,data)
  }

  deletePlayer(id:any): Observable<Player[]>{
    return this.http.delete<Player[]>(`http://localhost:5000/Cricbuzz/players/deletePlayers/${id}`)
  }

  editPlayer(id:any, data:any): Observable<Player[]>{
    return this.http.put<Player[]>(`http://localhost:5000/Cricbuzz/players/editPlayers/${id}`,data)
  }

}
