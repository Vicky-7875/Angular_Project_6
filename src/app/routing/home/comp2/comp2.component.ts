import { Component, OnInit } from "@angular/core";
import { DesignUtilityService } from "../../../appServices/design-utility.service";

@Component({
  selector: "app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.css"],
})
export class Comp2Component implements OnInit {
  userName;
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
