import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-pointstable',
  templateUrl: './pointstable.component.html',
  styleUrl: './pointstable.component.css'
})
export class PointstableComponent {
  years: number[] = [];
  displayedColumns=['S.No', 'team', 'P', 'W','L', 'NR', 'NRR', 'PTS', 'Recent Form'];
  dataSource:any;
  selectedYear?: number;

  constructor(private api:ApiService) {
    this.populateYears();
  }

  fetchData() {
    if (this.selectedYear) {
      this.api.getPointsTable(this.selectedYear).subscribe(
        (data) => {
          this.dataSource = data.teams.map((team: any) => ({
            team: team.team,
            P: team.matches,
            W: team.won,
            L: team.lost,
            NR: team.noResult,
            NRR: team.netRunRate.toFixed(3),
            PTS: team.points,
            recentForm: team.recentForm.join(', ')
          }));
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 15; i++) {
      this.years.push(currentYear - i);
    }
  }

}
