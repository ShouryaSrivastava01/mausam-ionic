import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.page.html',
  styleUrls: ['./weather-detail.page.scss'],
})


export class WeatherDetailPage implements OnInit {

  city: string = '';
  currentWeather: any;
  forecast: any;
  forecastData: any;


  location:any
  weatherData : any;
  expandedIndex: number | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const city = localStorage.getItem('city');
    if(city) {
      this.getWeatherByLocationName(city);
    } else {
      this.getGeoLocation();
    }
  }

  getWeather(lat:any,long:any): void {
    this.weatherService.fetchData(lat,long).subscribe((data) => {
      this.weatherData = data;
      this.currentWeather = this.weatherData.current;
      this.location = this.weatherData.location;
      this.forecast = this.weatherData.forecast.forecastday;
      console.log(this.forecast)
    });
  }


  toggleDetails(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

 async getGeoLocation(){
    const coord = await this.getCurrentLocation();
    if (coord) {
      this.getWeather(coord.coords.latitude, coord.coords.longitude);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  searchWeather() {
    if (this.city?.length > 2) {
      localStorage.setItem('city', this.city);
      this.getWeatherByLocationName(this.city) 
    }
  }

  getWeatherByLocationName(city:string) {
    this.weatherService.fetchByLocation(city).subscribe(data => {
      this.weatherData = data;
      this.currentWeather = this.weatherData.current;
      this.location = this.weatherData.location;
      this.forecast = this.weatherData.forecast.forecastday;
    });
  }

  async getCurrentLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }
}
