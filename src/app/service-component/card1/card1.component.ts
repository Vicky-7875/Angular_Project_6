import { Component, OnInit } from "@angular/core";
import { DesignUtilityService } from "src/app/appServices/design-utility.service";
// import { MessageSerivce } from "../../appServices/message.service";
@Component({
  selector: "app-card1",
  templateUrl: "./card1.component.html",
  styleUrls: ["./card1.component.css"],
})
export class Card1Component implements OnInit {
  product = {};
  constructor(private _msgService: DesignUtilityService) {}

  ngOnInit() {
    // this.product = this._msgService.product;
    this._msgService.product().subscribe((prodData) => {
      this.product = prodData;
    });
  }

  btnClick() {
    //manually not use instead use Dependacy injection
    // const msgService = new MessageSerivce();
    // msgService.messageAlert();

    //DI
    this._msgService.messageAlert();
  }
}
