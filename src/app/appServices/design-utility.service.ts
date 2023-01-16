import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DesignUtilityService {
  // product = { id: 1, name: "Mobile" };
  url = "https://jsonplaceholder.typicode.com/users";

  // userName = new Subject<any>();
  userName = new BehaviorSubject("Vivek");

  constructor(private http: HttpClient) {}

  messageAlert() {
    alert("Thanks for your Subscirtion,we will get you in touch shortyl");
  }
  product(): Observable<any> {
    return this.http.get(this.url);
  }
}
