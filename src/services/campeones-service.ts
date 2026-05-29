import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campeones } from '../model/campeones';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CampeonesService {
  
  private _baseUrl: string = "http://localhost:8080/api"
  
  constructor(
    private _http: HttpClient
  ){};

public getCampeones(): Observable<Campeones[]>{
  return this._http.get<Campeones[]>(this._baseUrl + "/campeones");
}

}
