import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn:'root'
})
export class WeatherService{
    api='a7758335f2654d30b8085504241203';

    constructor(private http: HttpClient){}

    fetchData(lat:any,long:any){
        
      console.log(lat,long)
       return this.http.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.api}`,
       {
        params: {
                q: `${lat},${long}`,
                days:5
          }
   })
       
       
    }
    fetchByLocation(location:any){
      
       return this.http.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.api}`,
       {
        params: {
                q: `${location}`,
                days:10
          }
   })
       
       
    }
  
}

// 53aad811907aa6ff0107fefe84adfa4d