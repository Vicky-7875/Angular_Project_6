import { Component, OnInit } from "@angular/core";
import { DesignUtilityService } from "../../appServices/design-utility.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  userName ;
  constructor(private _designService: DesignUtilityService) {
    this._designService.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }
  statusOnline: boolean = true;
  items = [
    {
      name: "laptop",
    },
    {
      name: "dfdfsd",
    },
    {
      name: "sdfsdf",
    },
    {
      name: "dsfdsf",
    },
  ];

  ngOnInit() {}
}
