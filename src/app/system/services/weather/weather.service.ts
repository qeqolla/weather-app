import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { Weather } from "../../interfaces/wether/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(loc: string): Observable<Weather> {
    return this.http.get<Weather>(`${environment.apiUrl}/weather?q=${loc}&appid=${environment.apiKey}&units=metric`)
  }
}
