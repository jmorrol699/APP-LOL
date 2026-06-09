import { Component, OnInit } from '@angular/core';
import { CampeonesService } from '../../../services/campeones-service';
import { Campeones } from '../../../model/campeones';

@Component({
  selector: 'app-tanques',
  imports: [],
  templateUrl: './tanques.html',
  styleUrl: './tanques.css',
})
export class Tanques implements OnInit {

  public tanques: Campeones[] = [];

  constructor(private _campeonesService: CampeonesService){}

  ngOnInit(): void {
    this._campeonesService.getCampeones().subscribe(data => {
      this.tanques = data.filter(campeon => campeon.role && campeon.role.includes('Tank'));
    })
  }
}
