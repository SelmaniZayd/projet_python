import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private urlAirPorts : string = "http://localhost:5000/airports";
  private urlAirlines : string = "http://localhost:5000/airlines";
  private urlDestinations : string = "http://localhost:5000/flights";
  private urlPlanes : string = "http://localhost:5000/planes";
  private urlTimeZone : string = "http://localhost:5000/flights";
 


  constructor(private http: HttpClient) {}

    getAirports():Observable<any>{
      return this.http.get<any>(this.urlAirPorts);
    }

    getAirlines():Observable<any>{
      return this.http.get<any>(this.urlAirlines);
    }

    getDestination():Observable<any>{
      return this.http.get<any>(this.urlDestinations);
    }

    getPlanes():Observable<any>{
      return this.http.get<any>(this.urlPlanes);
    }

    getTimeZone():Observable<any>{
      return this.http.get<any>(this.urlTimeZone);
    }

    getFlightsByAirlines(): Observable<any> {
      return this.http.get("http://localhost:5000/flights_by_airline");
    }

    getMostTakeoffPlanes(): Observable<any> {
      return this.http.get("http://localhost:5000/most_takeoff_planes");
    }

    getLeastTakeoffPlanes(): Observable<any> {
      return this.http.get("http://localhost:5000/least_takeoff_planes");
    }

    getMostDestAirports(): Observable<any> {
      return this.http.get("http://localhost:5000/most_dest_airports");
    }

    getLeastDestAirports(): Observable<any> {
      return this.http.get("http://localhost:5000/least_dest_airports");
    }

    getFlights(): Observable<any> {
      return this.http.get("http://localhost:5000/flights");
    }

    getWeather(): Observable<any> {
      return this.http.get("http://localhost:5000/weather");
    }

    getFlightsByOriginByAirline(): Observable<any> {
      return this.http.get("http://localhost:5000/flights_by_origin_by_airline")
    }

    getWeatherByOrigin(): Observable<any> {
      return this.http.get("http://localhost:5000/weather/avg");
    }



}
