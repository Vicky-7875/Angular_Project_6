import { Component, OnInit } from "@angular/core";
import { DesignUtilityService } from "../../../appServices/design-utility.service";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.css"],
})
export class Comp1Component implements OnInit {
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
