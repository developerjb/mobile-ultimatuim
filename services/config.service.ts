import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "@angular/common/http";
import { HttpParamsOptions } from "@angular/common/http/src/params";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  // const headers = new HttpHeaders().set('Content-Type', 'application/json');

  // const myObject: any = { this: 'thisThing', that: 'thatThing', other: 'otherThing'};
  // const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;

  // const options = { params: new HttpParams(httpParams), headers: headers };

  getConfigResponse(): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set(
      "Authorization",
      "Bearer FETUz6R6163p94ceyAHsom3dwvsd3m8y-HaFhGIzr-kWsJ3BCfIxP0FIcvn_ZUgOJasv7qX0HFbstPJDbsmoutHMcy9tS8N9zhHZJYVZCRgW8L7sqxqG7IjHWhU7XRHtGXnWT52q4wSKEa6atYpter-3uugEhjXJ6wc9PwNo_9oMoNGOvvLCsZBuWRYtYhM1WP-u6nZEa5zJmsE0lLMJcjCXdjg7RZSfqLImRa-xM66nKzs1JV9vIn7e7gL7ODCVHjTqVEXALX9rWna69LFLW25uPb56D1IYeCgjMCIOMkGvX-nIv7WqAfBaN4AVXo5ghXpOpy2Clf3GE6aBB6cL_H73bPqKcP4ISJpRZKASg9GrUhUq5wnUUkKVT6ojf1WCaw_C8IL9IsbyR2xvOMeJcf4qiPtW6QA8AyYVc7-X2B6jg8Ca1tufYjRbtilMroSD58uAhIRErx6xuQll_s8cuYaHjjss2F7F-ust4C4vWTPqNu6h4XUtn2j6impRXtpWIJLn24xdvR7BJm532gYFGw"
    );

    const myObject: any = { cid: "NOVA_DISWELY", id: "COMP-18" };
    const httpParams: HttpParamsOptions = {
      fromObject: myObject
    } as HttpParamsOptions;

    const options = { params: new HttpParams(httpParams), headers: headers };

    return this.http.get<any>("https://app.igglobal.net/api/request", options);
  }
}
