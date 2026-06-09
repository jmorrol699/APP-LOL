import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campeones } from '../../model/campeones';
import { CampeonesService } from '../../services/campeones-service';

@Component({
  selector: 'app-campeones-detail',
  imports: [],
  templateUrl: './campeones-detail.html',
  styleUrl: './campeones-detail.css',
})
export class CampeonesDetail implements OnInit {

  public id: string = '';
  public campeones?: Campeones;

  constructor( private _route: ActivatedRoute, private CampeonesService: CampeonesService ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id')!; 

    this.CampeonesService.getCampeonesById(this.id).subscribe(result => 
      this.campeones = result
    );

  }

}
