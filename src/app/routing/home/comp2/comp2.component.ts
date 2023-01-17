import { ElementRef, ViewChild } from "@angular/core";
import { AfterContentInit } from "@angular/core";
import { Renderer2 } from "@angular/core";
import { ContentChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { TestDirectiveDirective } from "src/app/appDirectives/test-directive.directive";
import { DesignUtilityService } from "../../../appServices/design-utility.service";

@Component({
  selector: "app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.css"],
})
export class Comp2Component implements OnInit, AfterContentInit {
  userName = "virtual";
  @ContentChild("childCom") childPara: ElementRef; //aftercontentiniti
  @ViewChild(TestDirectiveDirective) myDir: TestDirectiveDirective;  //directive with viewChild
  constructor(
    private _designService: DesignUtilityService,
    private renderer: Renderer2
  ) {
    // this._designService.userName.subscribe((uname) => {
    //   this.userName = uname;
    // });
  }
  ngOnInit() {}
  ngAfterContentInit(): void {
    console.log(this.childPara);
    this.renderer.setStyle(this.childPara.nativeElement, "color", "red");
  }
  updateUsername(unmae) {
    // this.userName = unmae.value;
    this._designService.userName.next(unmae.value);
  }
  clickme() {
    alert(this.userName);
    let text = this.renderer.createText("this text is created by renderder");
    this.renderer.appendChild(this.childPara.nativeElement, text);
  }

  changeColor(color) {
    this.myDir.changeBg(color);
  }
}
