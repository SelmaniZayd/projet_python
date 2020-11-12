import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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



}
