import { Component, OnInit } from "@angular/core";
import { DesignUtilityService } from "../../../appServices/design-utility.service";

@Component({
  selector: "app-comp4",
  templateUrl: "./comp4.component.html",
  styleUrls: ["./comp4.component.css"],
})
export class Comp4Component implements OnInit {
  userName ;
  constructor(private _designService: DesignUtilityService) {
    this._designService.userName.subscribe((uname) => {
      this.userName = uname;
    });
  }

  ngOnInit() {}
  updateUsername(unmae) {
    // this.userName = unmae.value;
    this._designService.userName.next(unmae.value);
  }
}
