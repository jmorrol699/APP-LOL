import { Component, OnInit } from '@angular/core';
import { CampeonesService } from '../../services/campeones-service';
import { Campeones } from '../../model/campeones';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  public campeones: Campeones[] = [];

  constructor(
    private _campeonesService: CampeonesService
  ){};

  ngOnInit(): void {
    this._campeonesService.getCampeones().subscribe(result => {
      this.campeones = result;
    });
    console.log(this.campeones);
  }

}
