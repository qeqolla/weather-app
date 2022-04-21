import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../system/services/weather/weather.service";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Weather } from "../../system/interfaces/wether/weather";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchField: FormControl;
  searchForm: FormGroup;

  weatherData!: Weather

  constructor (
    private weatherService: WeatherService,
    private fb: FormBuilder
  ) {
    this.searchField = new FormControl();
    this.searchForm = fb.group({search: this.searchField});
  }

  getWeather() {
    this.weatherService.getCurrentWeather(this.searchForm.value.search).subscribe({
      next: (data) => this.weatherData = data
    })
  }

  ngOnInit (): void {
  }

}
