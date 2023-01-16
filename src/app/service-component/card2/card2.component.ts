import { Component, OnInit } from "@angular/core";
import { DesignUtilityService } from "src/app/appServices/design-utility.service";
// import { MessageSerivce } from "../../appServices/message.service";

@Component({
  selector: "app-card2",
  templateUrl: "./card2.component.html",
  styleUrls: ["./card2.component.css"],
})
export class Card2Component implements OnInit {
  product = {};
  constructor(private _msgService: DesignUtilityService) {}

  ngOnInit() {
    this.product = this._msgService.product;
  }
  btnClick() {
    // const msgService = new MessageSerivce();
    // msgService.messageAlert();

    this._msgService.messageAlert();
  }
}
