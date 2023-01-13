import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-databind",
  templateUrl: "./databind.component.html",
  styleUrls: ["./databind.component.css"],
})
export class DatabindComponent implements OnInit {
  name: string = "vivek";
  appstatus: boolean = true;
  status1:string="online";
  status2:string="offline";
  constructor() {}

  ngOnInit() {}
  myMethod() {
    return "my name is " + this.name;
  }
}
