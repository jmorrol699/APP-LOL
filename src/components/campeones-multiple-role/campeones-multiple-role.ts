import { Component, OnInit } from '@angular/core';
import { CampeonesService } from '../../services/campeones-service';
import { Campeones } from '../../model/campeones';

@Component({
  selector: 'app-campeones-multiple-role',
  imports: [],
  templateUrl: './campeones-multiple-role.html',
  styleUrl: './campeones-multiple-role.css',
})
export class CampeonesMultipleRole implements OnInit{

  public campeones: Campeones[] = [];

  constructor(private _campeonesService: CampeonesService){}

  ngOnInit(): void {
    this._campeonesService.getMultipleRoleCampeones().subscribe(data => {
      this.campeones = data.filter(campeon => campeon.role && campeon.role.length >= 2);
    })
  }

}
